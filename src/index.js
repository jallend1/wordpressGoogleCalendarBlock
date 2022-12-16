import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";
import Local1857EventsBlock from "./local1857-events-block";

registerBlockType(metadata.name, {
	edit: Edit,
});

registerBlockType("local1857/events", {
	edit: Local1857EventsBlock,
	save: Save,
	title: "Local 1857 Events",
});
