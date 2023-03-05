import PromptForm from "../components/PromptForm";
import { useLazyFetchCodeQuery, changeCodePrompt } from "../store";
import Page from "./Page";

const placeholder = `Example: Hello World function in JS.`;

export default function WriteCodePage({ title }) {
	return (
		<Page title={title}>
			<PromptForm
				changePromptAction={changeCodePrompt}
				promptSelectorFunction={(state) => state.prompts.writecode}
				useLazyFetchQuery={useLazyFetchCodeQuery}
				placeholder={placeholder}
			/>
		</Page>
	);
}
