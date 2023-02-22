import PromptForm from "./components/PromptForm";
import { useFetchCodeMutation, changePrompt } from "./store";

export default function App() {
	return (
		<div>
			<PromptForm
				changePromptAction={changePrompt}
				promptSelectorFunction={(state) => state.writecode.prompt}
				useFetchMutation={useFetchCodeMutation}
				resultPropertyName="code"
			/>
		</div>
	);
}
