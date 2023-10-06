import { v4 as uuid } from "uuid";
import {
	deleteTaskLocalStorage,
	getTaskLocalStorage,
	getTasksLocalStorage,
	setTaskLocalStorage,
	setTasksLocalStorage,
} from "./offline/TasksOffline";
import { TaskData } from "@/types";
import { SmartListsIds } from "@/enums";

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
	const { listId } = task;

	const temporalID = uuid();
	const currentTask = {
		...task,
		_id: temporalID,
		listId: listId in SmartListsIds ? SmartListsIds.task : listId,
	};

	setTaskLocalStorage(temporalID, currentTask);

	return currentTask;
};

export const updateTask = async (
	_id: string,
	task: TaskData
): Promise<TaskData> => {
	const currentTask = task;

	setTaskLocalStorage(_id, currentTask);

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
