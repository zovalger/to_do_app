import { TaskStorageName } from "@/config/OfflineDataSettings";
import { Task } from "@/types";

export const getTaskLocalStorage = (_id: string): Task | null => {
	const data = localStorage.getItem(`${TaskStorageName}-${_id}`);

	if (!data) return null;

	return JSON.parse(data);
};

export const saveTaskLocalStorage = (task: Task) => {
	const { _id } = task;

	const data = JSON.stringify(task);

	localStorage.setItem(`${TaskStorageName}-${_id}`, data);
};
