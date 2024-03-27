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

import useList from "@/hooks/useList";

const AddButton = () => {
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
				background: "#fff",
				bottom: 0,
				display: "flex",
				mt: "auto",
				left: 0,
				position: "sticky",
				right: 0,
			}}
		>
			<ListItemButton onClick={handleClickList}>
				<ListItemIcon>
					<AddOutlinedIcon />
				</ListItemIcon>
				<ListItemText primary={"Nueva Lista"} />
			</ListItemButton>

			<Tooltip title="Crear nuevo grupo">
				<IconButton
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
			</Tooltip>
		</Box>
	);
};

export default AddButton;
