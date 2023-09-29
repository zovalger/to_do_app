import { ConfigUser, List, ListGroup, SmartListsConfig } from "./types";

// ************************************************
// 										Lists
// ************************************************

export const DefaultListGroup: ListGroup = {
	_id: "",
	title: "",
	lists: [],
	userId: "",
};

export const DefaultList: List = {
	_id: "",
	title: "Nueva Lista",
	userId: "",
	guests: "",
};

// ************************************************
// 										Config user
// ************************************************

export const DefaultSmartListsConfig: SmartListsConfig = {
	important: true,
	planned: true,
	complete: true,
	todo: true,
	toMyUser: true,
};

export const DefaultConfigUser: ConfigUser = {
	_id: "",
	userId: "",
	theme: "system", // dark, light, system
	smartLists: DefaultSmartListsConfig,
};
