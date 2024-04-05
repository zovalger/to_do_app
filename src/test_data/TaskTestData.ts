import { Frequencys } from "@/enums";
import { TaskAttributes } from "@/types";

const tasks: TaskAttributes[] = [
	{
		_id: "31231313",
		title: "titulo de tarea",
		steps: [
			{
				_id: "string",
				title: "paso 1",
				completionDate: new Date(),
			},
			{
				_id: "string",
				title: "paso 2",
				completionDate: new Date(),
			},
			{
				_id: "string",
				title: "paso 2",
				completionDate: new Date(),
			},
		],
		note: "esta es una nota larga",
		remindMe: new Date(),
		dueDate: new Date(),
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
		createAt: new Date(),
		updateAt: new Date(),
	},
	{
		_id: "ddsdd",
		title: "titulo de tarea2",
		steps: [
			{
				_id: "string",
				title: "paso 1",
				completionDate: new Date(),
			},
			{
				_id: "string",
				title: "paso 2",
				completionDate: new Date(),
			},
		],
		note: "esta es una nota larga",
		remindMe: new Date(),
		dueDate: new Date(),
		repeat: {
			frequency: Frequencys.daily,
			skip: 2,
		},
		myDay: new Date(),
		completionDate: new Date(),
		important: true,
		listId: "",
		files: [],
		assignedUser: "dsadasdas",
		myDayOrder: 1,
		order: 1,
		createAt: new Date(),
		updateAt: new Date(),
	},
];

export default tasks;
