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

		addTaskToListView: (
			state,
			actions: PayloadAction<{ listId: string; taskId: string }>
		) => {
			const { listId, taskId } = actions.payload;

			const newState = state.map((l) =>
				l.listId === listId ? { ...l, tasks: [...l.tasks, taskId] } : l
			);

			return newState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setTasksToView, addTaskToListView } = TasksToViewSlice.actions;

export default TasksToViewSlice.reducer;
