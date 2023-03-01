import PromptForm from "../components/PromptForm";
import { useLazyFetchUnitTestQuery, changeUnitTestPrompt } from "../store";

const placeholder = `Paste some code here and let CodeGPT Ninja create unit tests for you.`;

export default function WriteUnitTestPage() {
	return (
		<PromptForm
			changePromptAction={changeUnitTestPrompt}
			promptSelectorFunction={(state) => state.prompts.writeunittest}
			useLazyFetchQuery={useLazyFetchUnitTestQuery}
			placeholder={placeholder}
		/>
	);
}
