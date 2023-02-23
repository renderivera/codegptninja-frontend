import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PromptForm({
	useLazyFetchQuery,
	resultPropertyName,
	promptSelectorFunction,
	changePromptAction,
}) {
	const { prompt, submittedPrompt } = useSelector(promptSelectorFunction);
	const [fetchData, result] = useLazyFetchQuery();
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(changePromptAction({ prompt: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchData(prompt, true).then(() => {
			dispatch(changePromptAction({ submittedPrompt: prompt }));
		});
	};

	// load previous gpt result
	useEffect(() => {
		if (submittedPrompt.length > 0) {
			// avoid unnecessary req to server
			fetchData(submittedPrompt, true);
		}
	}, []);

	let content;
	if (result.isLoading) {
		content = "loading..."; //todo: add skeleton
	} else if (result.isError) {
		content = `Error: ${result.data.error}`;
	} else if (result.isSuccess) {
		content = result.data[resultPropertyName];
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<textarea value={prompt} onChange={handleChange} />
				<input type="submit" value="go ninja!" />
			</form>
			<pre>{content}</pre>
		</div>
	);
}
