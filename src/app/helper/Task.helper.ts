import { v4 as uuid } from "uuid";
import { DefaultStepTask } from "@/defaultValues";
import { SmartListsIds } from "@/enums";
import { StepTaskData, TaskData } from "@/types";
import moment from "moment";

// ************************** by smart list  *************************

export const taskBySmartList = (
	tasks: TaskData[],
	listId: string | null
): TaskData[] | null => {
	if (listId == SmartListsIds.myDay)
		return tasks.filter((t) => !!t.myDay && moment().isSame(t.myDay, "day"));

	if (listId == SmartListsIds.important)
		return tasks.filter((t) => t.important);

	if (listId == SmartListsIds.todo) return tasks;
	
	if (listId == SmartListsIds.complete) return tasks.filter((t) => t.complete);

	return null;
};

export const taskByListId = (
	tasks: TaskData[],
	listId: string | null
): TaskData[] => {
	if (!listId) return [];

	const bySmartList = taskBySmartList(tasks, listId);

	if (bySmartList) return bySmartList;

	return tasks.filter((t) => t.listId === listId);
};

// ************************** steps *************************

export const addStepToTask = (task: TaskData): TaskData => {
	const { steps } = task;

	return { ...task, steps: [...steps, { ...DefaultStepTask, _id: uuid() }] };
};

export const updateStepOfTask = (
	task: TaskData,
	stepId: string,
	step: StepTaskData
): TaskData => {
	const { steps } = task;

	const newSteps = steps.map((s) => (s._id !== stepId ? s : step));

	return { ...task, steps: newSteps };
};

// ************************** arrays *************************

export const updateTaskInArr = (
	tasks: TaskData[],
	_id: string,
	task: TaskData
): TaskData[] => {
	return tasks.map((t) => (t._id != _id ? t : task));
};
