import { createSlice } from "@reduxjs/toolkit";
import languages from "../languages";

export const languageSlice = createSlice({
	name: "language",
	initialState: languages[0],
	reducers: {
		changeLanguage: (state, action) => {
			state.label = action.payload.label;
			state.value = action.payload.value;
		},
	},
});

export const { changeLanguage } = languageSlice.actions;
