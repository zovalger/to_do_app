import {
	ConfigUser,
	ListData,
	ListGroupData,
	SmartListsConfig,
	TaskData,
} from "./types";

// ************************************************
// 										Lists
// ************************************************

export const DefaultListGroup: ListGroupData = {
	_id: "",
	title: "",
	userId: "",
	lists: [],
};

export const DefaultList: ListData = {
	_id: "",
	title: "Nueva Lista",
	userId: "",
	guests: [],
};

// ************************************************
// 										Lists
// ************************************************

export const DefaultTask: TaskData = {
	_id: "",
	title: "",
	steps: [],
	note: "",
	remindMe: new Date(),
	dueDate: new Date(),
	repeat: "",
	myDay: false,
	complete: false,
	important: false,
	listId: "",
	files: [],
	assignedUser: "",
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
