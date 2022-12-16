<?php
/**
 * Plugin Name:       Local 1857 Events Block
 * Description:       Imports upcoming events from Google Calendar and renders them on KCLS Voice
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Two Dogs Web Development
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       events-block
 *
 * @package           local-1857
 */

include_once 'iCalEasyReader.php';

function local1857_standardizeStartTime($arr){
	// All day events have their start time stored as an array, while events with a start time have it stored as a string
	return is_array($arr) ? $arr['value'] : $arr;
}

function local1857_convertICStoDateTime($icsDate){
	$eventDate = local1857_standardizeStartTime($icsDate);
	// Convert the date from the ics file to a DateTime object
	$year = substr($eventDate, 0, 4);
	$month = substr($eventDate, 4, 2);
	$day = substr($eventDate, 6, 2);
	$eventDateTime = new DateTime($year . '-' . $month . '-' . $day);
	return $eventDateTime;
}

function getLocal1857EventImage($eventName){
	$eventImage = '';
	if(strpos($eventName, 'Listening Session') !== false): $eventImage = 'assets/listening.png';
	elseif (strpos($eventName, 'Executive Board') !== false): $eventImage = 'assets/meeting.png';
	elseif(strpos($eventName, 'General Membership Meeting') !== false): $eventImage = 'assets/discussion.png';
	else: $eventImage = 'assets/local1857logo.png';
	endif; 
	return plugin_dir_url( __FILE__ ) . $eventImage;
}

function parse_ics_date($date){
	if(is_string($date)){
		$calendarDate = substr($date, 0, 8);
		$time = substr($date, 9, 6);
		$datetime = date_create($calendarDate . ' ' . $time);
		$datetime->setTimezone(new DateTimeZone('America/Los_Angeles'));
		return $datetime;
	}
}

function local1857_filter_passed_events($event){
	// Filter out events that have already passed
	$currentDateTime = new DateTime();
	$eventDateTime = local1857_convertICStoDateTime($event['DTSTART']);
	$eventDistance = date_diff($eventDateTime, $currentDateTime)->format('%r%a');
	return $eventDistance <= 0;
}

function local1857_sort_events($a, $b){
	$currentDateTime = new DateTime();
	if($a['DTSTART'] && $b['DTSTART']) {
		// Converts ICS date to PHP DateTime object
		$firstEvent = local1857_convertICStoDateTime($a['DTSTART']);
		$secondEvent = local1857_convertICStoDateTime($b['DTSTART']);
		// Sort the array by distance to the current date
		$firstEventDistance = date_diff($firstEvent, $currentDateTime)->format('%r%a');
		$secondEventDistance = date_diff($secondEvent, $currentDateTime)->format('%r%a');
		return $secondEventDistance <=> $firstEventDistance ;
	}
}

function local1857_get_events($url){
	$ics = new local1857_iCalEasyReader();
	$lines = $ics->load(file_get_contents($url));
	usort($lines['VEVENT'], 'local1857_sort_events');
	$filteredEvents = array_filter($lines['VEVENT'], 'local1857_filter_passed_events');	
	$latestEvents = array_slice($filteredEvents, 0, 4);
	return $latestEvents;
}

function local1857_compile_events_data(){
	$rawEvents = local1857_get_events('https://calendar.google.com/calendar/ical/1857comms%40gmail.com/public/basic.ics');
	$eventsData = [];
	foreach($rawEvents as $event){
		$eventData = [];
		$eventData['title'] = $event['SUMMARY'];
		$eventData['description'] = $event['DESCRIPTION'];
		$eventData['location'] = $event['LOCATION'];
		$eventData['start'] = parse_ics_date($event['DTSTART']);
		$eventData['end'] = parse_ics_date($event['DTEND']);
		$eventsData[] = $eventData;
	}
	return $eventsData;
}

function local_1857_events_block_block_init() {
	register_block_type( __DIR__ . '/build' , 
	['attributes' => array(
				'events' => array(
					'type' => 'array',
					'default' => local1857_compile_events_data(),
				),
			)]
	);

	register_block_type('local1857/events-block', array(
		'editor_script' => 'local1857-events-block',
	));
}

add_action( 'init', 'local_1857_events_block_block_init' );
