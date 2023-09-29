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

  
	return (
		<Box sx={{ display: "flex", mt: "auto" }}>
			<ListItemButton>
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
