import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
export default function Edit(props) {
	const events = props.attributes.events.slice();
	return (
		<div {...useBlockProps()}>
			<div className="kcls-recent-news-block">
				<div className="kcls-voice-editor-news-container">
					{events && events.length === 0 && "No Upcoming Events"}
					{/* Slices the latest five blog entries and renders them into the editor */}
					{events && events.length > 0
						? events.map((event, index) => {
								return (
									<div
										class={
											index === 0
												? "kcls-voice-editor-news kcls-voice-editor-news-main"
												: "kcls-voice-editor-news"
										}
									>
										<h3 className="kcls-recent-news-editor-heading">
											{event.title}
										</h3>
										{index === 0 && <p>{event.description}</p>}
									</div>
								);
						  })
						: null}
					<div className="kcls-editor-news-overlay">
						<h3>
							This automatically pulls the most recent five posts, and is not
							editable.
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
