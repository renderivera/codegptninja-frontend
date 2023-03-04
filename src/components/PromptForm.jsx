import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingText } from "../assets/AsciiArt";
import Typewriter from "./TypeWriter";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "../assets/PrismLanguages";
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

	// load previous gpt result on page change
	useEffect(() => {
		if (submittedPrompt.length > 0) {
			fetchAi(submittedPrompt, true);
		}
	}, [fetchAi, submittedPrompt]);

	let content = "";
	if (result.isFetching) {
		content = "loading..."
	} else if (result.isError) {
		content = `Error: (${result.error.status}) ${result.error.data.error}`;
	} else if (result.isSuccess) {
		content = result.data.ai;
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
				<div className="form-input">
					<Editor
						className="editor"
						value={content}
						readOnly={true}
						placeholder="result will be printed here"
						highlight={(content) => Prism.highlight(content, Prism.languages[language.value])}
						padding={0}
					/>
				</div>
				<button type="submit" className="form-button" disabled={result.isFetching || result.isError || content.length === 0}>
					<HiClipboardCopy />
					<div>copy</div>
				</button>
			</form>
		</div>
	);
}
