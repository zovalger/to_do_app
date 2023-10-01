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
