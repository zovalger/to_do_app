import { TasksByListTestData } from "@/test_data/TaskTestData";
import { TaskAttributes, TasksByList } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = TasksByListTestData || {};

export const TasksByListSlice = createSlice({
	name: "tasksByList",
	initialState,
	reducers: {
		// set data
		setTaskByList_By_ServerData: (
			_state,
			actions: PayloadAction<TasksByList>
		) => {
			return actions.payload;
		},

		// set data
		setTaskByList_By_Individual_Task: (
			_state,
			actions: PayloadAction<TaskAttributes[]>
		) => {
			const tasks = actions.payload;
			const tasksByList: TasksByList = {};

			tasks.map((task) => {
				const oldStateList = tasksByList[task.listId];

				tasksByList[task.listId] = [...oldStateList, task._id];
			});

			return tasksByList;
		},

		// add task
		addOrUpdateTaskByList: (
			state,
			actions: PayloadAction<{ listId: string; tasks: string[] }>
		) => {
			const { listId, tasks } = actions.payload;

			const newState = { ...state, [listId]: tasks };

			return newState;
		},

		addTask_To_List_TaskByList: (
			state,
			actions: PayloadAction<{ listId: string; task: string }>
		) => {
			const { listId, task } = actions.payload;

			const list = state[listId];

			const newState = { ...state, [listId]: [...list, task] };

			return newState;
		},

		removeTaskByListOfMemory: (state, actions: PayloadAction<string>) => {
			const listId = actions.payload;

			delete state[`${listId}`];

			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setTaskByList_By_ServerData,
	setTaskByList_By_Individual_Task,
	addOrUpdateTaskByList,
	addTask_To_List_TaskByList,
	removeTaskByListOfMemory,
} = TasksByListSlice.actions;

export default TasksByListSlice.reducer;
