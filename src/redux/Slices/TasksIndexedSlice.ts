import { TasksIndexedTestdata } from "@/test_data/TaskTestData";
import { TaskAttributes, TasksIndexed } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = TasksIndexedTestdata || {};

export const TasksIndexedSlice = createSlice({
	name: "tasksIndexed",
	initialState,
	reducers: {
		
		// set data
		setTaskIndexedData: (_state, actions: PayloadAction<TaskAttributes[]>) => {
			const tasks = actions.payload;
			const index: TasksIndexed = {};

			tasks.map((l) => {
				index[`${l._id}`] = l;
			});

			return index;
		},

		// add task
		addOrUpdateTaskToIndex: (
			state,
			actions: PayloadAction<{ _id: string; data: TaskAttributes }>
		) => {
			const { _id, data } = actions.payload;

			const newIndex = { ...state, [`${_id}`]: { ...data, _id } };

			return newIndex;
		},

		// todo: por testear
		removeTaskFromIndexed: (state, actions: PayloadAction<string>) => {
			const _id = actions.payload;

			delete state[`${_id}`];
			// const newIndex = { ...state, [`${_id}`]:undefined };

			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setTaskIndexedData,
	addOrUpdateTaskToIndex,
	removeTaskFromIndexed,
} = TasksIndexedSlice.actions;

export default TasksIndexedSlice.reducer;
