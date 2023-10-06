import { TaskStorageName } from "@/config/OfflineDataSettings";
import { TaskData } from "@/types";

// ******************************************************************
// 												individual
// ******************************************************************

export const getTaskLocalStorage = (_id: string): TaskData | null => {
	const data = localStorage.getItem(`${TaskStorageName}-${_id}`);

	if (!data) return null;

	return JSON.parse(data);
};

export const setTaskLocalStorage = (_id: string,Task: TaskData) => {


	const data = JSON.stringify(Task);

	localStorage.setItem(`${TaskStorageName}-${_id}`, data);
};

export const deleteTaskLocalStorage = (_id: string) => {
	localStorage.setItem(`${TaskStorageName}-${_id}`, "");
};

// ******************************************************************
// 										conjunto completo
// ******************************************************************
export const getTasksLocalStorage = (): TaskData[] => {
	const data = localStorage.getItem(`${TaskStorageName}`);

	if (!data) return [];

	return JSON.parse(data);
};

export const setTasksLocalStorage = (tasks: TaskData[]) => {
	const data = JSON.stringify(tasks);

	localStorage.setItem(`${TaskStorageName}`, data);
};
