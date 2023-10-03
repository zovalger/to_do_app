import { v4 as uuid } from "uuid";
import { TaskStorageName } from "@/config/OfflineDataSettings";
import { DefaultList } from "@/defaultValues";
import { ListData, TaskData } from "@/types";
import {
	getListLocalStorage,
	getListsLocalStorage,
	setListLocalStorage,
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
