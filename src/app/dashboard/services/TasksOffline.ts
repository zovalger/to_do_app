import { ListStorageName } from "@/config/OfflineDataSettings";
import { List } from "@/types";

export const getListsLocalStorage = (): List[] => {
	const data = localStorage.getItem(ListStorageName);

	if (!data) return [];

	return JSON.parse(data);
};

export const saveListsLocalStorage = (lists: List[]) => {
	const data = JSON.stringify(lists);
	localStorage.setItem(ListStorageName, data);
};
