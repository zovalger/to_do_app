import React, { useState } from "react";
import { FormatListBulletedOutlined } from "@mui/icons-material";

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { useFormik } from "formik";
import * as Yup from "yup";

import { OrderList } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import ListOptions from "./ListOptions";
import useList from "@/hooks/useList";
import DraggableContainer from "../DraggableContainer";
import { setListSelected } from "@/redux/Slices/ToDoNavPropertiesSlice";
import { closeLeftPanel } from "@/redux/Slices/UISlice";

interface props {
	data: OrderList;
}

const ListItem = ({ data }: props) => {
	const { _id } = data;

	const { listSelected, dragMode } = useAppSelector((e) => e.toDoNavProperties);

	const listsIndexed = useAppSelector((e) => e.listsIndexed);
	const listData = listsIndexed[`${_id}`];
	const { title, parentId } = listData;

	const { updateList } = useList();
	const dispatch = useAppDispatch();

	const [isEditing, setIsEditing] = useState(false);

	const formik = useFormik({
		initialValues: listData,
		validationSchema: Yup.object({}),
		onSubmit: async (data) => {
			await updateList(_id, data);
			setIsEditing(false);
		},
	});

	// ****************** funciones para botones ******************

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const onClose = () => {
		setAnchorEl(null);
	};

	const handdleClick = () => {
		if (dragMode || isEditing) return;

		dispatch(closeLeftPanel());
		dispatch(setListSelected(_id));
	};

	// todo: agregar accesibilidad para el movil (mantener pulsado)
	const handleRightClick = (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		if (dragMode) return;
		event.preventDefault();
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const changeName = () => {
		setIsEditing(true);
		onClose();
	};
	const closeChangeName = () => {
		setIsEditing(false);
		formik.submitForm();
	};
	const shareList = () => {};
	const extractFromGroup = () => {};
	const printList = () => {};
	const sendForEmail = () => {};
	const pin = () => {};
	const duplicate = () => {};

	if (!title) return "datos no encontrados";

	return (
		<DraggableContainer id={_id} isDraggable={dragMode}>
			<>
				<ListItemButton
					// ****************
					onClick={handdleClick}
					// onDoubleClick={handleRightClick}
					onContextMenu={handleRightClick}
					selected={_id === listSelected}
				>
					<ListItemIcon sx={parentId ? { ml: 4.5 } : {}}>
						<FormatListBulletedOutlined />
					</ListItemIcon>

					{isEditing ? (
						<Paper
							component="form"
							onSubmit={formik.handleSubmit}
							sx={{
								// mx: 2,

								p: "2px 4px",
								display: "flex",
								alignItems: "center",

								height: 32,
							}}
						>
							<InputBase
								sx={{ ml: 1, flex: 1, fontSize: 13 }}
								placeholder="Buscar"
								inputProps={{ "aria-label": "search " }}
								value={formik.values.title}
								onChange={formik.handleChange}
								name="title"
								onBlur={closeChangeName}
								autoComplete="none"
							/>
						</Paper>
					) : (
						<ListItemText primary={title} />
					)}
				</ListItemButton>

				<ListOptions
					data={data}
					anchorEl={anchorEl}
					close={onClose}
					changeName={changeName}
					shareList={shareList}
					extractFromGroup={extractFromGroup}
					printList={printList}
					sendForEmail={sendForEmail}
					pin={pin}
					duplicate={duplicate}
				/>
			</>
		</DraggableContainer>
	);
};

export default ListItem;
