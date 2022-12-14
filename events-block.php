<?php
/**
 * Plugin Name:       Local 1857 Events Block
 * Description:       Imports upcoming events from Google Calendar and renders them on KCLS Voice
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Two Dogs Web Development
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       events-block
 *
 * @package           local-1857
 */

include_once 'iCalEasyReader.php';

function parse_ics_date($date){
	if(is_string($date)){
		$calendarDate = substr($date, 0, 8);
		$time = substr($date, 9, 6);
		$datetime = date_create($calendarDate . ' ' . $time);
		$datetime->setTimezone(new DateTimeZone('America/Los_Angeles'));
		return $datetime;
	}
}

function local1857_get_events($url){
	$ics = new local1857_iCalEasyReader();
	$lines = $ics->load(file_get_contents($url));
	usort($lines['VEVENT'], 'kcls_sort_events');
	$filteredEvents = array_filter($lines['VEVENT'], 'filter_passed_events');	
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
}

add_action( 'init', 'local_1857_events_block_block_init' );
