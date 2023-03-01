import { createSlice } from "@reduxjs/toolkit";

const promptTemplate = {
	prompt: "",
	submittedPrompt: "",
};

const initialState = {
	writecode: promptTemplate,
	explaincode: promptTemplate,
	writeunittest: promptTemplate,
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
		changeUnitTestPrompt: (state, action) => {
			state.writeunittest = { ...state.writeunittest, ...action.payload };
		},
	},
});

export const { changeCodePrompt, changeExplainPrompt, changeUnitTestPrompt } = promptSlice.actions;
