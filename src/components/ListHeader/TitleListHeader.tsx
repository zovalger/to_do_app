import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

import {
	getNameList,
	getSmartListName,
	uptadeListInArray,
} from "@/app/helper/List.helper";

const TitleListHeader = () => {
	// const { lists, setLists, listSelected } = useListAndGroupContext();

	const [inputValue, setInputValue] = useState("");
	const [editingMode, setEditingMode] = useState(false);

	// const ifSmartList = getSmartListName(listSelected);

	// const title = ifSmartList || getNameList(lists, listSelected);

	const handleClickTitle = () => {
		// if (!listSelected) return;
		// if (ifSmartList) return;
		// setInputValue(title);
		// setEditingMode(true);
	};

	const onChange = (value: string) => {
		setInputValue(value);
	};

	const handleSubmit = async () => {
		// if (!listSelected) return;
		// const oldList = lists.find((l) => l._id == listSelected);
		// if (!oldList) return;
		// const newList = await updateList(listSelected, {
		// 	...oldList,
		// 	title: inputValue,
		// });
		// const newArr = uptadeListInArray(lists, oldList._id, newList);
		// setListsLocalStorage(newArr);
		// setLists(newArr);
		// setEditingMode(false);
	};

	// useEffect(() => {
	// 	setInputValue("");
	// 	setEditingMode(false);

	// 	return () => {};
	// }, [listSelected]);

	return editingMode ? (
		<TextField
			value={inputValue}
			onChange={({ target: { value } }) => {
				onChange(value);
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter") handleSubmit();
			}}
			onBlur={() => {
				handleSubmit();
			}}
		/>
	) : (
		<Typography
			onClick={() => handleClickTitle()}
			variant="h5"
			component="div"
			sx={{ fontWeight: 600 }}
		>
			{
				"Titulo " //title
			}
		</Typography>
	);
};

export default TitleListHeader;
