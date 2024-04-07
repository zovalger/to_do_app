import { v4 as uuid } from "uuid";
import { TypeList } from "./enums";
import { ListAttributes, TaskAttributes } from "./types";

export const listDefaultValues = (group: boolean = false): ListAttributes => ({
	_id: uuid(),
	// userId: null,
	title: "Nueva lista",
	parentId: null,
	order: 0,
	type: group ? TypeList.group : TypeList.list,
	createAt: new Date().toString(),
	updateAt: new Date().toString(),
});

export const taskDefaultValues = (): TaskAttributes => ({
	_id: uuid(),
	title: "",
	steps: [],
	note: "",
	remindMe: null,
	dueDate: null,
	repeat: null,
	myDay: null,
	completionDate: null,
	important: false,
	listId: "idSix",
	files: [],
	assignedUser: null,
	myDayOrder: null,
	order: 0,
	createAt: new Date().toString(),
	updateAt: new Date().toString(),
});
