import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
export default function Edit() {
	return (
		<p {...useBlockProps()}>
			{__("Local 1857 Events Block – hello from the editor!", "events-block")}
		</p>
	);
}
