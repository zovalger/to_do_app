import { ListData, ListGroupData } from "@/types";

export const orderGroupAndList = () => {};

export const formateGroups = (
	listGroups: ListGroupData[],
	lists: ListData[]
): { groupAndLists: [ListGroupData, ListData[]][]; restLists: ListData[] } => {
	let restLists = lists;

	const groupAndLists = listGroups.map((group): [ListGroupData, ListData[]] => {
		const toThisGroup: ListData[] = [];

		const newRest = restLists.filter((item) => {
			const res = group.lists.includes(item._id);

			if (res) toThisGroup.push(item);

			return !res;
		});

		restLists = newRest;

		return [group, toThisGroup];
	});

	return {
		groupAndLists,
		restLists,
	};
};

export const getRemainingLists = (
	listGroups: ListGroupData[],
	lists: ListData[]
): ListData[] => {
	const listsUngrouped: ListData[] = [];

	listGroups.map((g) =>
		lists.map((l) => {
			if (!g.lists.includes(l._id)) listsUngrouped.push(l);
		})
	);

	console.log(listsUngrouped);

	return listsUngrouped;
};
