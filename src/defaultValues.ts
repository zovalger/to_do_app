import { Frequencys } from "./enums";
import {
	ConfigUser,
	ListData,
	ListGroupData,
	RepeatFrequency,
	SmartListsConfig,
	StepTaskData,
	TaskData,
} from "./types";

// ************************************************
// 										Lists
// ************************************************

export const DefaultListGroup: ListGroupData = {
	_id: "",
	title: "Nuevo grupo",
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
// 										task
// ************************************************

export const DefaultRepeatFrequency: RepeatFrequency = {
	frequency: Frequencys.daily,
	skip: 1,
	// days:
};
export const DefaultStepTask: StepTaskData = {
	_id: "",
	title: "",
	complete: false,
};

export const DefaultTask: TaskData = {
	_id: "",
	title: "",
	steps: [],
	note: "",
	remindMe: new Date(),
	dueDate: new Date(),
	repeat: DefaultRepeatFrequency,
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
