import { ListAttributes, ListGroupAttributes, userAttributes } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const testdata: ListGroupAttributes[] | ListAttributes[] = [
	// {
	// 	_id: "",
	// 	title: "grupo 1",
	// 	lists: [],
	// 	userId: "",
	// },
	// {
	// 	_id: "",
	// 	title: "grupo 1",
	// 	userId: "",
	// 	guests: [],
	// },
];

const initialState = testdata;

export const groupAndListOrderSlice = createSlice({
	name: "groupAndListOrder",
	initialState,
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = groupAndListOrderSlice.actions;

export default groupAndListOrderSlice.reducer;
