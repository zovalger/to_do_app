import React from "react";
import { FormatListBulletedOutlined } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ListData } from "@/types";

interface props {
	data: ListData;

	icon?: JSX.Element;
	inGroup?: boolean;
}

const ListInNav = ({ data, icon, inGroup = false }: props) => {
	const { title } = data;

	return (
		<ListItemButton sx={inGroup ? { ml: 4 } : {}}>
			<ListItemIcon>{icon || <FormatListBulletedOutlined />}</ListItemIcon>

			<ListItemText primary={title} />
		</ListItemButton>
	);
};

export default ListInNav;
