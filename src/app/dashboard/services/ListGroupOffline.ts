import { ListGroupStorageName } from "@/config/OfflineDataSettings";
import { ListGroup } from "@/types";

export const getListGroupLocalStorage = (_id: string): ListGroup | null => {
	const data = localStorage.getItem(`${ListGroupStorageName}-${_id}`);

	if (!data) return null;

	return JSON.parse(data);
};

export const saveListGroupLocalStorage = (listGroup: ListGroup) => {
	const { _id } = listGroup;

	const data = JSON.stringify(listGroup);

	localStorage.setItem(`${ListGroupStorageName}-${_id}`, data);
};
