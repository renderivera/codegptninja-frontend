import { createSlice } from "@reduxjs/toolkit";

const promptTemplate = {
	prompt: "",
	submittedPrompt: "",
};

const initialState = {
	writecode: promptTemplate,
	explain: promptTemplate,
};

export const promptSlice = createSlice({
	name: "prompts",
	initialState,
	reducers: {
		changeCodePrompt: (state, action) => {
			state.writecode = { ...state.writecode, ...action.payload };
		},
		changeExplainPrompt: (state, action) => {
			state.explain = { ...state.writecode, ...action.payload };
		},
	},
});

export const { changeCodePrompt, changeExplainPrompt } = promptSlice.actions;
