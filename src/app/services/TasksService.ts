import { v4 as uuid } from "uuid";
import {
	deleteTaskLocalStorage,
	getTaskLocalStorage,
	getTasksLocalStorage,
	setTaskLocalStorage,
	setTasksLocalStorage,
} from "./offline/TasksOffline";
import { TaskData } from "@/types";

// dar datos de una taska
export const getTask = async (_id: string): Promise<TaskData | null> => {
	return getTaskLocalStorage(_id);
};

// dar datos de una taska
export const getTasks = async (): Promise<TaskData[]> => {
	return getTasksLocalStorage();
};

// crear una taska datos de una taska

export const createTask = async (task: TaskData): Promise<TaskData> => {
	const currentTask = { ...task, _id: uuid() };

	setTaskLocalStorage(currentTask);

	return currentTask;
};

export const deleteTask = async (_id: string): Promise<void> => {
	deleteTaskLocalStorage(_id);
};

export const deleteTaskByListId = async (
	task: TaskData[],
	listId: string
): Promise<TaskData[]> => {
	const toDelete: TaskData[] = [];

	const rest = task.filter((t) => {
		const a = t.listId != listId;

		if (!a) toDelete.push(t);

		return a;
	});

	await Promise.all(toDelete.map((t) => deleteTask(t._id)));

	setTasksLocalStorage(rest);

	return rest;
};
