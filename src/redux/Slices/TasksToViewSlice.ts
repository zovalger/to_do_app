import { TasksToViewTestData } from "@/test_data/TaskTestData";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = TasksToViewTestData || [];

export const TasksToViewSlice = createSlice({
	name: "tasksToView",
	initialState,
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = TasksToViewSlice.actions;

export default TasksToViewSlice.reducer;
