import PromptForm from "../components/PromptForm";
import { useLazyFetchUnitTestQuery, changeUnitTestPrompt } from "../store";
import Page from "./Page";

const placeholder = `Paste some code here and let CodeGPT Ninja create unit tests for you.`;

export default function WriteUnitTestPage({ title }) {
	return (
		<Page title={title}>
			<PromptForm
				changePromptAction={changeUnitTestPrompt}
				promptSelectorFunction={(state) => state.prompts.writeunittest}
				useLazyFetchQuery={useLazyFetchUnitTestQuery}
				placeholder={placeholder}
			/>
		</Page>
	);
}
