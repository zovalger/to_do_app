import { ListStorageName } from "@/config/OfflineDataSettings";
import { ListData } from "@/types";

// ******************************************************************
// 												individual
// ******************************************************************

export const getListLocalStorage = (_id: string): ListData | null => {
	const data = localStorage.getItem(`${ListStorageName}-${_id}`);

	if (!data) return null;

	return JSON.parse(data);
};

export const setListLocalStorage = (List: ListData) => {
	const { _id } = List;

	const data = JSON.stringify(List);

	localStorage.setItem(`${ListStorageName}-${_id}`, data);
};

export const deleteListLocalStorage = (_id: string) => {
	localStorage.setItem(`${ListStorageName}-${_id}`, "");
};

// ******************************************************************
// 										conjunto completo
// ******************************************************************
export const getListsLocalStorage = (): ListData[] => {
	const data = localStorage.getItem(`${ListStorageName}`);

	if (!data) return [];

	return JSON.parse(data);
};

export const setListsLocalStorage = (lists: ListData[]) => {
	const data = JSON.stringify(lists);

	localStorage.setItem(`${ListStorageName}`, data);
};
