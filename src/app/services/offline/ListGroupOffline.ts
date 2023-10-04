import { ListGroupStorageName } from "@/config/OfflineDataSettings";
import {  ListGroupData } from "@/types";

// ******************************************************************
// 												individual
// ******************************************************************

export const getListGroupLocalStorage = (_id: string): ListGroupData | null => {
	const data = localStorage.getItem(`${ListGroupStorageName}-${_id}`);

	if (!data) return null;

	return JSON.parse(data);
};

export const setListGroupLocalStorage = (group: ListGroupData) => {
	const { _id } = group;

	const data = JSON.stringify(group);

	localStorage.setItem(`${ListGroupStorageName}-${_id}`, data);
};

export const deleteListGroupLocalStorage = (_id: string) => {
	localStorage.setItem(`${ListGroupStorageName}-${_id}`, "");
};

// ******************************************************************
// 										conjunto completo
// ******************************************************************
export const getListGroupsLocalStorage = (): ListGroupData[] => {
	const data = localStorage.getItem(`${ListGroupStorageName}`);

	if (!data) return [];

	return JSON.parse(data);
};

export const setListGroupsLocalStorage = (groups: ListGroupData[]) => {
	const data = JSON.stringify(groups);

	localStorage.setItem(`${ListGroupStorageName}`, data);
};
