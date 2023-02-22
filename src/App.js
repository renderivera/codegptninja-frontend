import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchCodeMutation, changePrompt } from "./store";

export default function App() {
	const prompt = useSelector((state) => state.writecode.prompt);
	const dispatch = useDispatch();

	const [fetchCode, result] = useFetchCodeMutation();

	const handleChange = (e) => {
		dispatch(changePrompt(e.target.value));
	};

	const handleClick = () => {
		fetchCode(prompt);
	};

	let content;
	if (result.isLoading) {
		content = "loading...";
	} else if (result.isError) {
		content = "Error";
	} else if (result.isSuccess) {
		content = result.data.code;
		console.log(content);
	}

	return (
		<div>
			<input value={prompt} onChange={handleChange} />
			<button disabled={result.isLoading} onClick={handleClick}>
				submit
			</button>
			<div>
				<pre>{content}</pre>
			</div>
		</div>
	);
}
