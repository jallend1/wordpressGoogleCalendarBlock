import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";

export default function KCLSEventBlock() {
	const KCLSEventBlockBlocks = [
		[
			"core/group",
			{ className: "kcls-events kcls-section" },
			[
				[
					"core/group",
					{ className: "kcls-section-title" },
					[
						[
							"core/heading",
							{
								level: 2,
								content: "Upcoming Events",
								className: "kcls-heading",
							},
						],
						[
							"core/button",
							{
								text: "See All Events",
								className: "kcls-read-blog-button",
								url: "/meetings/",
							},
						],
					],
				],
				["local-1857/events-block"],
			],
		],
	];
	return (
		<div className="kcls-event-block">
			<InnerBlocks {...useBlockProps()} template={KCLSEventBlockBlocks} />
		</div>
	);
}
