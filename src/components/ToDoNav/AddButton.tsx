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

const AddButton = () => {
	// const { lists, setLists, listGroups, setListGroups } =
	// 	useListAndGroupContext();

	const handleClickList = async () => {
		// const list = await createList();
		// const newLists = [...lists, list];

		// setListsLocalStorage(newLists);
		// setLists(newLists);
	};

	const handleClickListGroup = async () => {
		// const newGroup = await createListGroup();

		// const newGroups = [...listGroups, newGroup];

		// setListGroupsLocalStorage(newGroups);
		// setListGroups(newGroups);
	};

	return (
		<Box sx={{ display: "flex", mt: "auto" }}>
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
