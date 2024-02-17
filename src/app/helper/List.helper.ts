import { SmartListsIds, SmartListsLabels } from "@/enums";
import { ListAttributes } from "@/types";

export const getSmartListName = (smartListId: string|null): string | null => {
	if(smartListId == null ) return null

	if (smartListId == SmartListsIds.myDay) return SmartListsLabels[smartListId];

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


export const getNameList = (lists: ListAttributes[], _id: string | null): string => {
	const smartTitle = _id && getSmartListName(_id);
	const currentList = lists.find((l) => l._id == _id)?.title;

	return smartTitle || currentList || "Titulo de Lista";
};

export const uptadeListInArray = (
	lists: ListAttributes[],
	_id: string,
	list: ListAttributes
): ListAttributes[] => {
	const oldListIndex = lists.findIndex((l) => l._id === _id);

	if (oldListIndex >=0) {
		lists[oldListIndex] = list;
		return lists;
	}

	lists.push(list);

	return lists;
};
