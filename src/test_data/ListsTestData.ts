import { TypeList } from "@/enums";
import { ListsIndexed, OrderList } from "@/types";

export const ListsIndexedTestdata: ListsIndexed = {
	idOne: {
		_id: "idOne",
		userId: "1",
		title: "grupo dinamico ",
		parentId: null,
		order: 3,
		type: TypeList.group,
		createAt: (new Date()).toString(),
		updateAt: (new Date()).toString(),
	},
	idTwo: {
		_id: "idOne",
		userId: "1",
		title: "segundo grupo dinamico ",
		parentId: null,
		order: 5,
		type: TypeList.group,
		createAt: (new Date()).toString(),
		updateAt: (new Date()).toString(),
	},
	idThree: {
		_id: "idThree",
		userId: "1",
		title: "lista de redux",
		parentId: null,
		order: 2,
		type: TypeList.list,
		createAt: (new Date()).toString(),
		updateAt: (new Date()).toString(),
	},
	idFor: {
		_id: "idFor",
		userId: "1",
		title: "lista de for",
		parentId: null,
		order: 1,
		type: TypeList.list,
		createAt: (new Date()).toString(),
		updateAt: (new Date()).toString(),
	},
	idFive: {
		_id: "idFive",
		userId: "1",
		title: "lista de for",
		parentId: null,
		order: 1,
		type: TypeList.list,
		createAt: (new Date()).toString(),
		updateAt: (new Date()).toString(),
	},
	idSix: {
		_id: "idSix",
		userId: "1",
		title: "lista 6 de primera",
		parentId: null,
		order: 0,
		type: TypeList.list,
		createAt: (new Date()).toString(),
		updateAt: (new Date()).toString(),
	},
};

export const OrderListTestdata: OrderList[] = [
	{ _id: "idThree", childrens: [], type: TypeList.list },
	{ _id: "idFive", childrens: [], type: TypeList.list },
	// {
	// 	_id: "idTwo",
	// 	childrens: [],
	// 	type: TypeList.group,
	// },
	{ _id: "idFor", childrens: [], type: TypeList.list },
	// {
	// 	_id: "idOne",
	// 	childrens: [
	// 	],
	// 	type: TypeList.group,
	// },
	{
		_id: "idSix",
		childrens: [],
		type: TypeList.list,
	},
];
