import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingText } from "./AsciiArt";
import Typewriter from "./TypeWriter";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";
import "prismjs/themes/prism-tomorrow.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiClipboardCopy } from "react-icons/hi";

export default function PromptForm({ useLazyFetchQuery, promptSelectorFunction, changePromptAction, placeholder }) {
	const { prompt, submittedPrompt } = useSelector(promptSelectorFunction);
	const [fetchAi, result] = useLazyFetchQuery();
	const language = useSelector((state) => state.language);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(changePromptAction({ prompt: e }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchAi(prompt, true).then(() => {
			dispatch(changePromptAction({ submittedPrompt: prompt }));
		});
	};
	const copyToClipboard = (e) => {
		e.preventDefault();
		navigator.clipboard.writeText(result.data.ai);
	};

	// load previous gpt result
	useEffect(() => {
		if (submittedPrompt.length > 0) {
			fetchAi(submittedPrompt, true);
		}
	}, [fetchAi, submittedPrompt]);

	let content;
	let copyButtonDisable = false;
	if (result.isFetching) {
		content = (
			<pre className="loading-text">
				<Typewriter text={loadingText} duration={2000} loop={true} />
			</pre>
		);
	} else if (result.isError) {
		content = `Error: (${result.error.status}) ${result.error.data.error}`;
	} else if (result.isSuccess) {
		const ai = result.data.ai;
		content = (
			<Editor
				className="editor"
				value={ai}
				readOnly={true}
				highlight={(ai) => Prism.highlight(ai, Prism.languages[language.value])}
				padding={0}
			/>
		);
	} else {
		content = <div className="disabledText">Result will be printed here</div>;
		copyButtonDisable = true;
	}

	return (
		<div className="prompt-form">
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-input">
					<Editor
						className="editor"
						value={prompt}
						onValueChange={handleChange}
						highlight={(prompt) => Prism.highlight(prompt, Prism.languages[language.value])}
						padding={0}
						placeholder={placeholder}
					/>
				</div>
				<button type="submit" className="form-button" disabled={result.isFetching || prompt.length === 0}>
					<AiFillThunderbolt />
					<div>go ninja</div>
				</button>
			</form>
			<form className="form" onSubmit={copyToClipboard}>
				<div className="form-input">{content}</div>
				<button type="submit" className="form-button" disabled={result.isFetching || copyButtonDisable}>
					<HiClipboardCopy />
					<div>copy</div>
				</button>
			</form>
		</div>
	);
}
