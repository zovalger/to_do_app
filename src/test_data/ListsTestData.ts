import { TypeList } from "@/enums";
import { ListsIndexed, OrderList } from "@/types";

export const ListsIndexedTestdata: ListsIndexed = {
	"1": {
		_id: "1",
		userId: "1",
		title: "grupo dinamico ",
		parentId: null,
		order: 3,
		type: TypeList.group,
		createAt: new Date(),
		updateAt: new Date(),
	},
	"2": {
		_id: "1",
		userId: "1",
		title: "segundo grupo dinamico ",
		parentId: null,
		order: 5,
		type: TypeList.group,
		createAt: new Date(),
		updateAt: new Date(),
	},
	"3": {
		_id: "3",
		userId: "1",
		title: "lista de redux",
		parentId: "2",
		order: 2,
		type: TypeList.list,
		createAt: new Date(),
		updateAt: new Date(),
	},
	"4": {
		_id: "4",
		userId: "1",
		title: "lista de for",
		parentId: "1",
		order: 1,
		type: TypeList.list,
		createAt: new Date(),
		updateAt: new Date(),
	},
	"5": {
		_id: "5",
		userId: "1",
		title: "lista de for",
		parentId: "2",
		order: 1,
		type: TypeList.list,
		createAt: new Date(),
		updateAt: new Date(),
	},
	"6": {
		_id: "6",
		userId: "1",
		title: "lista 6 de primera",
		parentId: null,
		order: 0,
		type: TypeList.list,
		createAt: new Date(),
		updateAt: new Date(),
	},
};

export const OrderListTestdata: OrderList[] = [
	{
		_id: "2",
		childrens: [
			{ _id: "3", childrens: [], type: TypeList.list },
			{ _id: "5", childrens: [], type: TypeList.list },
		],
		type: TypeList.group,
	},
	{
		_id: "1",
		childrens: [{ _id: "4", childrens: [], type: TypeList.list }],
		type: TypeList.group,
	},
	{
		_id: "6",
		childrens: [],
		type: TypeList.list,
	},
];
