export interface userAttributes {
	_id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	// password: string;
	createAt: string;
	updateAt: string;
}

export interface contactAttributes {
	_id: string;
	nickname: string;
	from: string;
	to: string;
	createAt: string;
	updateAt: string;
}

// ************************************************
// 									configuracion de usuario
// ************************************************
export interface ConfigUser {
	_id: string;
	userId: string;
	theme: string; // dark, light, system
	smartLists: SmartListsConfig;
	createAt: string;
	updateAt: string;
}

export interface SmartListsConfig {
	important: boolean;
	planned: boolean;
	todo: boolean;
	complete: boolean;
	toMyUser: boolean;
}

// ************************************************
// 										Lists
// ************************************************

import { Frequencys, TypeList } from "./enums";

export interface ListAttributes {
	_id: string;
	userId?: string;
	title: string;
	parentId: string | null;
	order: number;
	type: TypeList;
	createAt: string;
	updateAt: string;
}

// ***** list Logic *****

export interface SmartListAttributes {
	_id: string;
	icon?: JSX.Element;
	title: string;
}

export interface OrderList {
	_id: string;
	childrens: OrderList[];
	type: TypeList;
}

export interface ListsIndexed {
	[listId: string]: ListAttributes;
}

export interface ToDoNavProperties {
	listSelected: string;
	dragMode: boolean;
}
// ************************************************
// 										Task
// ************************************************

export interface FileSchema {
	_id: string;
	taskId: string;
	url: string;
	type: string;
	size: string;
	createAt: string;
}

export interface StepTaskAttributes {
	_id: string;
	title: string;
	completionDate: string;
}

export interface RepeatFrequency {
	frequency: Frequencys;
	skip: number;
}

export interface TaskAttributes {
	_id: string;
	listId: string;
	title: string;
	steps: StepTaskAttributes[];
	note: string;
	remindMe: string | null;
	dueDate: string | null;
	repeat: RepeatFrequency;
	myDay: string | null;
	myDayOrder: number | null;
	order: number;
	completionDate: string | null;
	important: boolean;
	files: string[];
	assignedUser: string;
	createAt: string;
	updateAt: string;
}

// ***** task Logic *****

export interface TasksIndexed {
	[taskId: string]: TaskAttributes;
}

export interface TasksByList {
	[listId: string]: string[];
}
export interface TasksToView {
	listId: string;
	tasks: string[];
}
