export interface userAttributes {
	_id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	// role: Roles;
	token: string;
}

// ************************************************
// 										Lists
// ************************************************

import { Frequencys } from "./enums";

export interface ListGroupAttributes {
	_id: string;
	title: string;
	lists: string[];
	userId: string;
}

export interface ListAttributes {
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

export interface StepTaskAttributes {
	_id: string;
	title: string;
	complete: boolean;
}

export interface RepeatFrequency {
	frequency: Frequencys;
	skip: number;
	// days:
}

export interface TaskAttributes {
	_id: string;
	title: string;
	steps: StepTaskAttributes[];
	note: string;
	remindMe: Date | null;
	dueDate: Date | null;
	repeat: RepeatFrequency;
	myDay: Date | null;
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
