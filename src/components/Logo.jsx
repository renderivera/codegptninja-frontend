import Typewriter from "./TypeWriter";
import { image, text } from "../assets/AsciiArt";

export default function Logo() {
	return (
		<div className="logo">
			<pre className="logo-img">
				<Typewriter text={image} duration={2000} />
			</pre>
			<pre className="logo-text">
				<Typewriter text={text} duration={2000} />
			</pre>
		</div>
	);
}
