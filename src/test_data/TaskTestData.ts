import { Frequencys } from "@/enums";
import { TasksByList, TasksIndexed, TasksToView } from "@/types";

export const TasksIndexedTestdata: TasksIndexed = {
	dddddd: {
		_id: "dddddd",
		title: "titulo de tarea",
		steps: [
			{
				_id: "string",
				title: "paso 1",
				completionDate: new Date().toString(),
			},
			{
				_id: "string",
				title: "paso 2",
				completionDate: new Date().toString(),
			},
			{
				_id: "string",
				title: "paso 2",
				completionDate: new Date().toString(),
			},
		],
		note: "esta es una nota larga",
		remindMe: new Date().toString(),
		dueDate: new Date().toString(),
		repeat: {
			frequency: Frequencys.daily,
			skip: 2,
		},
		myDay: null,
		completionDate: null,
		important: false,
		listId: "",
		files: [],
		assignedUser: "dsadasdas",
		myDayOrder: 1,
		order: 1,
		createAt: new Date().toString(),
		updateAt: new Date().toString(),
	},
	sssss: {
		_id: "sssss",
		title: "titulo de tarea2",
		steps: [
			{
				_id: "string",
				title: "paso 1",
				completionDate: new Date().toString(),
			},
			{
				_id: "string",
				title: "paso 2",
				completionDate: new Date().toString(),
			},
		],
		note: "esta es una nota larga",
		remindMe: new Date().toString(),
		dueDate: new Date().toString(),
		repeat: {
			frequency: Frequencys.daily,
			skip: 2,
		},
		myDay: new Date().toString(),
		completionDate: new Date().toString(),
		important: true,
		listId: "",
		files: [],
		assignedUser: "dsadasdas",
		myDayOrder: 1,
		order: 1,
		createAt: new Date().toString(),
		updateAt: new Date().toString(),
	},
};

export const TasksToViewTestData: TasksToView[] = [
	{
		listId: "idSix",
		tasks: ["dddddd", "sssss"],
	},
];

export const TasksByListTestData: TasksByList = {
	idSix: ["dddddd", "sssss"],
	idFor: ["sssss"],
};
