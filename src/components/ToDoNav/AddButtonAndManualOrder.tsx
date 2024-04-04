import React from "react";
import {
	Box,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import Tooltip from "@mui/material/Tooltip";

import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
	initDragMode,
	stopDragMode,
} from "@/redux/Slices/ToDoNavPropertiesSlice";
import useList from "@/hooks/useList";

const AddButtonAndManualOrder = () => {
	const dispatch = useAppDispatch();
	const { dragMode } = useAppSelector((e) => e.toDoNavProperties);
	const { createList, createGroup } = useList();

	const handleClickList = async () => {
		createList();
	};

	const handleClickListGroup = async () => {
		createGroup();
	};

	return (
		<Box
			sx={{
				display: "flex",
			}}
		>
			<ListItemButton onClick={handleClickList}>
				<ListItemIcon>
					<AddOutlinedIcon />
				</ListItemIcon>
				<ListItemText primary={"Nueva Lista"} />
			</ListItemButton>

			{/* <Tooltip title="Crear nuevo grupo"> */}
				<IconButton
					disabled
					onClick={handleClickListGroup}
					sx={{
						borderRadius: 0,
						flexShrink: 0,
						width: 48,
					}}
					color="inherit"
				>
					<PlaylistAddOutlinedIcon />
				</IconButton>
			{/* </Tooltip> */}

			<Tooltip title="Modo de ordenamiento">
				<IconButton
					onClick={() => dispatch(dragMode ? stopDragMode() : initDragMode())}
					sx={{
						borderRadius: 0,
						flexShrink: 0,
						width: 48,
					}}
					color={dragMode ? "primary" : "inherit"}
				>
					<DragIndicatorIcon />
				</IconButton>
			</Tooltip>
		</Box>
	);
};

export default AddButtonAndManualOrder;
