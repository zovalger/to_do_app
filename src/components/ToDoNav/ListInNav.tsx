import React from "react";
import { FormatListBulletedOutlined } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { ListAttributes } from "@/types";

interface props {
	data: ListAttributes;

	icon?: JSX.Element;
	inGroup?: boolean;
}

const ListInNav = ({ data, icon, inGroup = false }: props) => {

	const { _id, title } = data;

	const onClick = () => {
		// setListSelected(_id);
		// handleAsidePanelToggle()
	};

	return (
		<ListItemButton
			onClick={onClick}
			selected={
				false
				// _id === listSelected
			
			}
			sx={inGroup ? { ml: 4 } : {}}
		>
			<ListItemIcon>{icon || <FormatListBulletedOutlined />}</ListItemIcon>

			<ListItemText primary={title} />
		</ListItemButton>
	);
};

export default ListInNav;
