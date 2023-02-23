import { configureStore } from "@reduxjs/toolkit";
import { openaiApi } from "./api/openaiApi";
import { promptSlice } from "./slices/promptSlice";

export const store = configureStore({
	reducer: {
		[openaiApi.reducerPath]: openaiApi.reducer,
		[codeSlice.name]: promptSlice.reducer,
	},
	middleware: (getDM) => getDM().concat(openaiApi.middleware),
});

export { useLazyFetchCodeQuery } from "./api/openaiApi";
export { changeCodePrompt, changeExplainPrompt } from "./slices/promptSlice";
