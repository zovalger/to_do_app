import { ListsIndexedTestdata } from "@/test_data/ListsTestData";
import { ListAttributes, ListsIndexed } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = ListsIndexedTestdata || {};

export const ListsIndexedSlice = createSlice({
	name: "listsIndexed",
	initialState,
	reducers: {
		// set data
		setListIndexedData: (_state, actions: PayloadAction<ListAttributes[]>) => {
			const lists = actions.payload;
			const index: ListsIndexed = {};

			lists.map((l) => {
				index[`${l._id}`] = l;
			});

			return index;
		},

		// add list
		addOrUpdateListToIndex: (
			state,
			actions: PayloadAction<{ _id: string; data: ListAttributes }>
		) => {
			const { _id, data } = actions.payload;

			const newIndex = { ...state, [`${_id}`]: { ...data, _id } };

			return newIndex;
		},

		// todo: por testear
		removeListFromIndexed: (state, actions: PayloadAction<string>) => {
			const _id = actions.payload;

			delete state[`${_id}`];
			// const newIndex = { ...state, [`${_id}`]:undefined };

			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setListIndexedData,
	addOrUpdateListToIndex,
	removeListFromIndexed,
} = ListsIndexedSlice.actions;

export default ListsIndexedSlice.reducer;
