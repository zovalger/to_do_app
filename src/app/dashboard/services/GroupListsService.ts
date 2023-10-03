import { v4 as uuid } from "uuid";
import {  DefaultListGroup } from "@/defaultValues";
import { ListGroupData } from "@/types";

import { getListGroupLocalStorage, getListGroupsLocalStorage, setListGroupLocalStorage } from "./offline/ListGroupOffline";

// dar datos de una lista
export const getListGroup = async (
	_id: string
): Promise<ListGroupData | null> => {
	const listGroup = getListGroupLocalStorage(_id);

	if (!listGroup) return null;

	return listGroup;
};

// dar datos de una lista
export const getListGroups = async (): Promise<ListGroupData[]> => {
	return getListGroupsLocalStorage();
};

// crear una lista datos de una lista

export const createList = async (
	listGroup?: ListGroupData
): Promise<ListGroupData> => {
	const currentList = { ...(listGroup || DefaultListGroup), _id: uuid() };

	setListGroupLocalStorage(currentList);

	return currentList;
};
