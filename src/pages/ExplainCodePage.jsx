import PromptForm from "../components/PromptForm";
import { useLazyFetchExplainQuery, changeExplainPrompt } from "../store";

const placeholder = `Paste some code here and let CodeGPT Ninja explain it to you.`;

export default function ExplainCodePage() {
	return (
		<PromptForm
			changePromptAction={changeExplainPrompt}
			promptSelectorFunction={(state) => state.prompts.explaincode}
			useLazyFetchQuery={useLazyFetchExplainQuery}
			placeholder={placeholder}
		/>
	);
}
