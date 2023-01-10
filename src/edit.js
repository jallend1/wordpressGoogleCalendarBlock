import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit(props) {
	const events = props.attributes.events.slice();
	return (
		<div {...useBlockProps()}>
			<div className="local1857-events-block">
				<div className="local1857-editor-events-container">
					{events && events.length === 0 && "No Upcoming Events"}
					{events && events.length > 0
						? events.map((event) => {
								return (
									<div class="kcls-event">
										<h3 className="kcls-event-title">{event.title}</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								);
						  })
						: null}
					<div className="local1857-editor-events-overlay">
						<h3>
							This automatically pulls the closest three events, and is not
							editable.
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
