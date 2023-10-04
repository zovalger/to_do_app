import { v4 as uuid } from "uuid";
import { TaskStorageName } from "@/config/OfflineDataSettings";
import { DefaultList } from "@/defaultValues";
import { ListData, TaskData } from "@/types";
import {
	deleteListLocalStorage,
	getListLocalStorage,
	getListsLocalStorage,
	setListLocalStorage,
	setListsLocalStorage,
} from "./offline/ListsOffline";

// dar datos de una lista
export const getList = async (_id: string): Promise<ListData | null> => {
	return getListLocalStorage(_id);
};

// dar datos de una lista
export const getLists = async (): Promise<ListData[]> => {
	return getListsLocalStorage();
};

// crear una lista datos de una lista

export const createList = async (list?: ListData): Promise<ListData> => {
	const currentList = { ...(list || DefaultList), _id: uuid() };

	setListLocalStorage(currentList);

	return currentList;
};

export const deleteList = async (
	lists: ListData[],
	_id: string
): Promise<ListData[]> => {
	const newLists = lists.filter((l) => l._id !== _id);

	deleteListLocalStorage(_id);

	setListsLocalStorage(newLists);

	return newLists;
};
