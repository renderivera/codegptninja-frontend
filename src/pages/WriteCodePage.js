import { Link } from "react-router-dom";
import PromptForm from "../components/PromptForm";
import { useLazyFetchCodeQuery, changeCodePrompt, changeExplainPrompt } from "../store";

export default function WriteCodePage() {
	return (
		<section>
			<PromptForm
				changePromptAction={changeCodePrompt}
				promptSelectorFunction={(state) => state.prompts.writecode}
				useLazyFetchQuery={useLazyFetchCodeQuery}
				resultPropertyName="code"
			/>
		</section>
	);
}
