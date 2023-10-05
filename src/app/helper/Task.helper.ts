import { SmartListsIds } from "@/enums";
import { TaskData } from "@/types";

export const taskBySmartList = (
	tasks: TaskData[],
	listId: string | null
): TaskData[] | null => {
	if (listId == SmartListsIds.todo) return tasks;

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
