import { SmartListsIds, SmartListsLabels } from "@/enums";

export const getSmartListName = (smartListId: string): string | null => {
	if (smartListId == SmartListsIds.myDay)
	return SmartListsLabels[smartListId];

	if (smartListId == SmartListsIds.important)
		return SmartListsLabels[smartListId];

	if (smartListId == SmartListsIds.planned)
		return SmartListsLabels[smartListId];

	if (smartListId == SmartListsIds.todo) return SmartListsLabels[smartListId];

	if (smartListId == SmartListsIds.complete)
		return SmartListsLabels[smartListId];

	if (smartListId == SmartListsIds.toMyUser)
		return SmartListsLabels[smartListId];

	if (smartListId == SmartListsIds.emailMark)
		return SmartListsLabels[smartListId];

	if (smartListId == SmartListsIds.task) return SmartListsLabels[smartListId];

	return null;
};
