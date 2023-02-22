import { useDispatch, useSelector } from "react-redux";

export default function PromptForm({
	useFetchMutation,
	resultPropertyName,
	promptSelectorFunction,
	changePromptAction,
}) {
	const [fetch, result] = useFetchMutation();
	const prompt = useSelector(promptSelectorFunction);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(changePromptAction(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(prompt);
	};

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
				<textarea onChange={handleChange} />
				<input type="submit" value="go ninja!" />
			</form>
			<pre>{content}</pre>
		</div>
	);
}
