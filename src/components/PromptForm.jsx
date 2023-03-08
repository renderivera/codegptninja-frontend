import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "../assets/PrismLanguages";
import "prismjs/themes/prism-tomorrow.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiClipboardCopy } from "react-icons/hi";

export default function PromptForm({
	useLazyFetchQuery,
	promptSelectorFunction,
	changePromptAction,
	placeholder,
}) {
	const { prompt, submittedPrompt } = useSelector(promptSelectorFunction);
	const [fetchAi, result] = useLazyFetchQuery();
	const language = useSelector((state) => state.language);
	const dispatch = useDispatch();

	const langLabel = language.label;

	const handleChange = (text) => {
		dispatch(changePromptAction({ prompt: text }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const submittedPrompt = { text: prompt, langLabel };

		fetchAi(submittedPrompt, true).then(() => {
			dispatch(changePromptAction({ submittedPrompt }));
		});
	};
	const copyToClipboard = (e) => {
		e.preventDefault();
		navigator.clipboard.writeText(result.data.ai);
	};

	useEffect(() => {
		if (submittedPrompt.text.length > 0) {
			fetchAi(submittedPrompt, true);
		}
	}, []);

	let content = "";
	if (result.isFetching) {
		content = "loading...";
	} else if (result.isError) {
		content = `Error: (${result.error.status}) ${result.error.data?.error}`;
	} else if (result.isSuccess) {
		content = result.data.ai;
	}

	const highlight = (txt) => {
		return Prism.highlight(txt, Prism.languages[language.value]);
	};

	return (
		<div className="prompt-form">
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-input">
					<Editor
						className="editor"
						data-testid="input-editor"
						value={prompt}
						onValueChange={handleChange}
						highlight={highlight}
						padding={0}
						placeholder={placeholder}
					/>
				</div>
				<button
					type="submit"
					className="form-button"
					data-testid="submit-button"
					disabled={result.isFetching || prompt.length === 0}
				>
					<AiFillThunderbolt />
					<div>go ninja</div>
				</button>
			</form>
			<form className="form" onSubmit={copyToClipboard}>
				<div className="form-input">
					<Editor
						className="editor"
						data-testid="output-editor"
						value={content}
						readOnly={true}
						placeholder="result will be printed here"
						highlight={highlight}
						padding={0}
					/>
				</div>
				<button
					type="submit"
					className="form-button"
					data-testid="copy-button"
					disabled={result.isFetching || result.isError || content.length === 0}
				>
					<HiClipboardCopy />
					<div>copy</div>
				</button>
			</form>
		</div>
	);
}
