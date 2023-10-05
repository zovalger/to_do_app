import { ListGroupData } from "@/types";
import { v4 as uuid } from "uuid";
import {
	deleteListGroupLocalStorage,
	getListGroupLocalStorage,
	getListGroupsLocalStorage,
	setListGroupLocalStorage,
	setListGroupsLocalStorage,
} from "./offline/ListGroupOffline";
import { DefaultListGroup } from "@/defaultValues";

// dar datos de una lista
export const getListGroup = async (
	_id: string
): Promise<ListGroupData | null> => {
	return getListGroupLocalStorage(_id);
};

// dar datos de una lista
export const getListGroups = async (): Promise<ListGroupData[]> => {
	return getListGroupsLocalStorage();
};

// crear una lista datos de una lista

export const createListGroup = async (
	listGroup?: ListGroupData
): Promise<ListGroupData> => {
	const temporalID = uuid();
	const currentListGroup = {
		...(listGroup || DefaultListGroup),
		_id: temporalID,
	};

	setListGroupLocalStorage(temporalID, currentListGroup);

	return currentListGroup;
};

export const updateListGroup = async (
	_id: string,
	list: ListGroupData
): Promise<ListGroupData> => {
	const currentList = list;

	setListGroupLocalStorage(_id, currentList);

	return currentList;
};

export const deleteListGroup = async (
	listGroups: ListGroupData[],
	_id: string
): Promise<ListGroupData[]> => {
	const newLists = listGroups.filter((l) => l._id !== _id);

	deleteListGroupLocalStorage(_id);

	setListGroupsLocalStorage(newLists);

	return newLists;
};
