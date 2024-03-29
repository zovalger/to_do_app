import { ToDoNavProperties } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ToDoNavProperties = { listSelected: "", dragMode: false };

export const ToDoNavPropertiesSlice = createSlice({
	name: "toDoNavProperties",
	initialState,
	reducers: {
		setListSelected: (state, actions: PayloadAction<string>) => {
			const listSelected = actions.payload;
			return { ...state, listSelected };
		},

		unselect: (state) => {
			return { ...state, listSelected: "" };
		},
		initDragMode: (state) => {
			return { ...state, dragMode: true };
		},
		stopDragMode: (state) => {
			return { ...state, dragMode: false };
		},
	},
});

// Action creators are generated for each case reducer function
export const { setListSelected, unselect, initDragMode, stopDragMode } =
	ToDoNavPropertiesSlice.actions;

export default ToDoNavPropertiesSlice.reducer;
