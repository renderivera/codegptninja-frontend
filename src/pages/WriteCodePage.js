import PromptForm from "../components/PromptForm";
import { useLazyFetchCodeQuery, changeCodePrompt } from "../store";

const placeholder = `Example: Hello World function in JS.`;

export default function WriteCodePage() {
	return (
		<PromptForm
			changePromptAction={changeCodePrompt}
			promptSelectorFunction={(state) => state.prompts.writecode}
			useLazyFetchQuery={useLazyFetchCodeQuery}
			placeholder={placeholder}
		/>
	);
}
