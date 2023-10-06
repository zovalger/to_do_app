// ************************************************
// 										Lists
// ************************************************

import { Frequencys } from "./enums";

export interface ListGroupData {
	_id: string;
	title: string;
	lists: string[];
	userId: string;
}

export interface ListData {
	_id: string;
	title: string;
	userId: string;
	guests: string[];
}

// ************************************************
// 										Task
// ************************************************

export interface FileSchema {
	_id: string;
	url: string;
	publicId: string;
}

export interface StepTaskData {
	_id: string;
	title: string;
	complete: boolean;
}

export interface RepeatFrequency {
	frequency: Frequencys;
	skip: number;
	// days:
}

export interface TaskData {
	_id: string;
	title: string;
	steps: StepTaskData[];
	note: string;
	remindMe: Date;
	dueDate: Date;
	repeat: RepeatFrequency;
	myDay: boolean;
	complete: boolean;
	important: boolean;
	listId: string;
	files: string[];
	assignedUser: string;
}

// ************************************************
// 										usuario
// ************************************************

export interface User {
	_id: string;
	name: string;
	email: string;
	password: string;
}

export interface contacts {
	_id: string;
	nickName: string;
	from: string;
	to: string;
}

// ************************************************
// 									configuracion
// ************************************************
export interface ConfigUser {
	_id: string;
	userId: string;
	theme: string; // dark, light, system
	smartLists: SmartListsConfig;
}

export interface SmartListsConfig {
	important: boolean;
	planned: boolean;
	todo: boolean;
	complete: boolean;
	toMyUser: boolean;
}
