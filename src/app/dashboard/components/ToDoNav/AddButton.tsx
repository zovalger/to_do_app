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
import { createList } from "../../../services/ListsService";
import { useListAndGroupContext } from "@/app/contexts/ListAndGroup.context";
import { setListsLocalStorage } from "../../../services/offline/ListsOffline";

const AddButton = () => {
	const { lists, setLists } = useListAndGroupContext();

	const handleClickList = async () => {
		const list = await createList();
		const newLists = [...lists, list];

		setListsLocalStorage(newLists);
		setLists(newLists);
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
					sx={{ flexShrink: 0, width: 48, borderRadius: 0 }}
					color="inherit"
				>
					<PlaylistAddOutlinedIcon />
				</IconButton>
			</Tooltip>
		</Box>
	);
};

export default AddButton;
