<?php 
$events = $attributes['events'];

ob_start(); 
	// $events = kcls_get_events('https://calendar.google.com/calendar/ical/1857comms%40gmail.com/public/basic.ics');
	if(count($events) === 0){ ?>
	<h4 class="kcls-events-none">
		No events have been found at this time. If you believe this is in error, please reach out to the eBoard for more details.
	</h4>
<?php } else { ?>
		<div class="kcls-event-container">	
			<?php foreach($events as $event): 
				// $eventStartDate = parse_ics_date($event['DTSTART']);
				// $eventEndDate = parse_ics_date($event['DTEND']);
				$eventStartDate = ($event['start']);
				$eventEndDate = ($event['end']);
				?> 
				<div class="kcls-event">
					<header class="kcls-event-header">
						<div class="kcls-event-header-date">
							<div class="kcls-event-header-date-month">
								<?php echo date_format($eventStartDate, 'M'); ?>
							</div>
							<div class="kcls-event-header-date-day">
								<?php echo date_format($eventStartDate, 'd'); ?>
							</div>
						</div>
						<div>
							<h3 class="kcls-event-title"><?php echo $event['title']; ?></h3>
							<h4 class="kcls-event-time">
								<?php echo date_format($eventStartDate, 'g:i a') . ' - ' . date_format($eventEndDate, 'g:i a'); ?>
							</h4>
						</div>
					</header>	
					<div class="kcls-event-body">
						<?php echo str_replace("<br>", "", $event['description']); ?>
					</div>
					<footer class="kcls-event-logo">
						<img src="<?php echo getLocal1857EventImage($event['SUMMARY']); ?>" alt="<?php echo $event['SUMMARY']; ?>" />					
					</footer>
				</div>
			<?php endforeach; ?>
		</div>
			<?php } ?>
		<?php return ob_end_flush(); ?>
		
