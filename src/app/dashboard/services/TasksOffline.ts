import { ListStorageName } from "@/config/OfflineDataSettings";
import { ListData } from "@/types";

export const getListsLocalStorage = (): ListData[] => {
	const data = localStorage.getItem(ListStorageName);

	if (!data) return [];

	return JSON.parse(data);
};

export const saveListsLocalStorage = (lists: ListData[]) => {
	const data = JSON.stringify(lists);
	localStorage.setItem(ListStorageName, data);
};
