import { v4 as uuid } from "uuid";
import { DefaultList } from "@/defaultValues";
import { ListData } from "@/types";
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
	const temporalID = uuid();
	const currentList = { ...(list || DefaultList), _id: temporalID };

	setListLocalStorage(temporalID, currentList);

	return currentList;
};

export const updateList = async (
	_id: string,
	list: ListData
): Promise<ListData> => {
	const currentList = list;

	setListLocalStorage(_id, currentList);

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
