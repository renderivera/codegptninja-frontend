import { configureStore } from "@reduxjs/toolkit";
import { openaiApi } from "./api/openaiApi";
import { codeSlice } from "./slices/codeSlice";

export const store = configureStore({
	reducer: {
		[openaiApi.reducerPath]: openaiApi.reducer,
		[codeSlice.name]: codeSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(openaiApi.middleware);
	},
});

export { useFetchCodeMutation } from "./api/openaiApi";
export { changePrompt } from "./slices/codeSlice";
