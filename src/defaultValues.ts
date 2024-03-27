import { v4 as uuid } from "uuid";
import { TypeList } from "./enums";
import { ListAttributes } from "./types";

export const listDefaultValues = (group: boolean = false): ListAttributes => ({
	_id: uuid(),
	// userId: null,
	title: "Nueva lista",
	parentId: null,
	order: 0,
	type: group ? TypeList.group : TypeList.list,
	createAt: new Date(),
	updateAt: new Date(),
});
