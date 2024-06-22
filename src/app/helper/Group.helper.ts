// import { ListAttributes, ListGroupAttributes } from "@/types";

// export const orderGroupAndList = () => {};

// export const formateGroups = (
// 	listGroups: ListGroupAttributes[],
// 	lists: ListAttributes[]
// ): { groupAndLists: [ListGroupAttributes, ListAttributes[]][]; restLists: ListAttributes[] } => {
// 	let restLists = lists;

// 	const groupAndLists = listGroups.map((group): [ListGroupAttributes, ListAttributes[]] => {
// 		const toThisGroup: ListAttributes[] = [];

// 		const newRest = restLists.filter((item) => {
// 			const res = group.lists.includes(item._id);

// 			if (res) toThisGroup.push(item);

// 			return !res;
// 		});

// 		restLists = newRest;

// 		return [group, toThisGroup];
// 	});

// 	return {
// 		groupAndLists,
// 		restLists,
// 	};
// };

// export const getRemainingLists = (
// 	listGroups: ListGroupAttributes[],
// 	lists: ListAttributes[]
// ): ListAttributes[] => {
// 	const listsUngrouped: ListAttributes[] = [];

// 	listGroups.map((g) =>
// 		lists.map((l) => {
// 			if (!g.lists.includes(l._id)) listsUngrouped.push(l);
// 		})
// 	);

// 	console.log(listsUngrouped);

// 	return listsUngrouped;
// };
