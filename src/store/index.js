import { configureStore } from "@reduxjs/toolkit";
import { openaiApi } from "./api/openaiApi";
import { promptSlice } from "./slices/promptSlice";
import { languageSlice } from "./slices/languageSlice";

export const store = configureStore({
	reducer: {
		[openaiApi.reducerPath]: openaiApi.reducer,
		[promptSlice.name]: promptSlice.reducer,
		[languageSlice.name]: languageSlice.reducer,
	},
	middleware: (getDM) => getDM().concat(openaiApi.middleware),
});

export { useLazyFetchCodeQuery, useLazyFetchExplainQuery, useLazyFetchUnitTestQuery } from "./api/openaiApi";
export { changeCodePrompt, changeExplainPrompt, changeUnitTestPrompt } from "./slices/promptSlice";
export { changeLanguage } from "./slices/languageSlice";
