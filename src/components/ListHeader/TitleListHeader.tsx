import React, { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, InputBase } from "@mui/material";

import { useAppSelector } from "@/redux/store";
import { SmartListsIds } from "@/enums";
import useSmartList from "@/hooks/useSmartList";
import { useFormik } from "formik";
import ListValidator from "@/validators/ListValidators";
import useList from "@/hooks/useList";

interface props {
	isEditing: boolean;
	changeIsEditing(v: boolean): void;
}

const TitleListHeader = ({ isEditing, changeIsEditing }: props) => {
	// obtener datos de la lista smart o personalizada

	const { listSelected } = useAppSelector((e) => e.toDoNavProperties);
	const listsIndexed = useAppSelector((e) => e.listsIndexed);

	const { isAnSmartList } = useSmartList();
	const smartId = listSelected as SmartListsIds;
	const smartData = isAnSmartList(smartId);

	const listData = listsIndexed[listSelected];

	const { _id, title } = smartData || listData;

	// edicion de titulo de la lista

	const { updateList } = useList();

	const inputRef = useRef<HTMLInputElement>(null);

	const formik = useFormik({
		initialValues: listData,
		validationSchema: ListValidator,
		onSubmit: async (data) => {
			changeIsEditing(false);

			const t = data.title.trim();

			if (!t) return;

			if (t === title) return;

			await updateList(_id, data);
		},
	});

	const handleClickTitle = () => {
		if (smartData) return;

		formik.setValues(listData);
		// formik.setFieldValue("title", title);
		changeIsEditing(true);
	};

	useEffect(() => {
		if (isEditing) handleClickTitle();
	}, [isEditing]);

	useEffect(() => {
		if (isEditing) changeIsEditing(false);
	}, [_id]);

	return (
		<Box>
			{isEditing ? (
				<Box component={"form"} onSubmit={formik.handleSubmit}>
					<InputBase
						value={formik.values?.title}
						name="title"
						ref={inputRef}
						sx={{
							color: "white",
							fontSize: "1.5rem",
							fontWeight: 600,
							borderBottom: "2px solid #3338",
						}}
						inputProps={{
							style: {
								padding: 0,
								textShadow: "1px 2px 3px #0008",
							},
						}}
						onChange={formik.handleChange}
						onKeyDown={(e) => {
							if (e.key === "Enter") formik.handleSubmit();
						}}
						onBlur={() => formik.handleSubmit()}
					/>
				</Box>
			) : (
				<Typography
					onClick={handleClickTitle}
					variant="h5"
					component="div"
					sx={{ fontWeight: 600, textShadow: "1px 2px 3px #0008" }}
				>
					{title}
				</Typography>
			)}
		</Box>
	);
};

export default TitleListHeader;
