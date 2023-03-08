import { createSlice } from "@reduxjs/toolkit";

const promptTemplate = {
	prompt: "",
	submittedPrompt: {
		text: "",
		langLabel: "",
	},
};

const initialState = {
	writecode: promptTemplate,
	explaincode: promptTemplate,
};

export const promptSlice = createSlice({
	name: "prompts",
	initialState,
	reducers: {
		changeCodePrompt: (state, action) => {
			state.writecode = { ...state.writecode, ...action.payload };
		},
		changeExplainPrompt: (state, action) => {
			state.explaincode = { ...state.explaincode, ...action.payload };
		},
	},
});

export const { changeCodePrompt, changeExplainPrompt } = promptSlice.actions;
