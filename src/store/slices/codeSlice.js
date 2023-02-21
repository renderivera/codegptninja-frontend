import { createSlice } from "@reduxjs/toolkit";

export const codeSlice = createSlice({
	name: "writecode",
	initialState: {
		prompt: "",
	},
	reducers: {
		changePrompt: (state, action) => {
			state.prompt = action.payload;
		},
	},
});

export const { changePrompt } = codeSlice.actions;
