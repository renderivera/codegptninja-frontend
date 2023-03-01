import { useEffect, useState } from "react";

export default function Typewriter({ text, duration, loop = false }) {
	const [renderedText, setRenderedText] = useState("");

	useEffect(() => {
		if (renderedText.length < text.length) {
			setTimeout(() => {
				setRenderedText(renderedText.concat(text.charAt(renderedText.length)));
			}, duration / text.length);
		} else if (loop) {
			setRenderedText("");
		}
	}, [renderedText, setRenderedText]);

	return renderedText;
}
