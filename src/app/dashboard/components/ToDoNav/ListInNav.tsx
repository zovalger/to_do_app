import React from "react";
import { FormatListBulletedOutlined } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { ListData } from "@/types";
import { useListAndGroupContext } from "@/app/contexts/ListAndGroup.context";
import { useGlobalContext } from "@/app/contexts/Global.context";

interface props {
	data: ListData;

	icon?: JSX.Element;
	inGroup?: boolean;
}

const ListInNav = ({ data, icon, inGroup = false }: props) => {
	const { handleAsidePanelToggle} = useGlobalContext()
	const { listSelected, setListSelected } = useListAndGroupContext();
	const { _id, title } = data;

	const onClick = () => {
		setListSelected(_id);
		handleAsidePanelToggle()
	};

	return (
		<ListItemButton
			onClick={onClick}
			selected={_id === listSelected}
			sx={inGroup ? { ml: 4 } : {}}
		>
			<ListItemIcon>{icon || <FormatListBulletedOutlined />}</ListItemIcon>

			<ListItemText primary={title} />
		</ListItemButton>
	);
};

export default ListInNav;
