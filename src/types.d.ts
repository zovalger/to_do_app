export interface userAttributes {
	_id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	// password: string;
	createAt: Date;
	updateAt: Date;
}

export interface contactAttributes {
	_id: string;
	nickname: string;
	from: string;
	to: string;
	createAt: Date;
	updateAt: Date;
}

// ************************************************
// 									configuracion de usuario
// ************************************************
export interface ConfigUser {
	_id: string;
	userId: string;
	theme: string; // dark, light, system
	smartLists: SmartListsConfig;
	createAt: Date;
	updateAt: Date;
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
	createAt: Date;
	updateAt: Date;
}

// ***** list Logic *****

export interface OrderList {
	_id: string;
	childrens: OrderList[];
	type: TypeList;
}

export interface ListsIndexed {
	[productId: string]: ListAttributes;
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
	createAt: Date;
}

export interface StepTaskAttributes {
	_id: string;
	title: string;
	completionDate: Date;
	createAt: Date;
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
	remindMe: Date | null;
	dueDate: Date | null;
	repeat: RepeatFrequency;
	myDay: Date | null;
	myDayOrder: number;
	order: number;
	completionDate: Date;
	important: boolean;
	files: string[];
	assignedUser: string;
	createAt: Date;
	updateAt: Date;
}
