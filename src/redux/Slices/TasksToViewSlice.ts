import { TasksToViewTestData } from "@/test_data/TaskTestData";
import { TasksToView } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = TasksToViewTestData || [];

export const TasksToViewSlice = createSlice({
	name: "tasksToView",
	initialState,
	reducers: {
		setTasksToView: (state, actions: PayloadAction<TasksToView[]>) => {
			return actions.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setTasksToView } = TasksToViewSlice.actions;

export default TasksToViewSlice.reducer;
