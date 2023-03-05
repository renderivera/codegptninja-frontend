import Typewriter from "./TypeWriter";
import { image, text } from "../assets/AsciiArt";

export default function Logo() {
	return (
		<figure className="logo" role="img" aria-label="codegpt ninja logo ascii art" >
			<pre className="logo-img">
				<Typewriter text={image} duration={2000} />
			</pre>
			<pre className="logo-text">
				<Typewriter text={text} duration={2000} />
			</pre>
		</figure>
	);
}
