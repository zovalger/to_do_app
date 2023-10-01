import { ConfigUser, ListData, ListGroupData, SmartListsConfig } from "./types";

// ************************************************
// 										Lists
// ************************************************

export const DefaultListGroup: ListGroupData = {
	_id: "",
	title: "",
	lists: [],
	userId: "",
};

export const DefaultList: ListData = {
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
