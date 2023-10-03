import { v4 as uuid } from "uuid";

// dar datos de una lista
export const getGroupLists = async (_id: string): Promise<GroupListsData | null> => {
	return DefaultGroupLists;
};

// crear una lista datos de una lista

export const createGroupLists = async (list?: GroupListsData): Promise<GroupListsData> => {
	const currentGroupLists = { ...(list || DefaultGroupLists), _id: uuid() };

	setGroupListsLocalStorage(currentGroupLists);

	return currentGroupLists;
};


