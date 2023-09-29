import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import SmartListLabels from "./helper/SmartListLabels";
import { SmartList } from "@/types";

interface props {
	smartList: SmartList;
}

const SmartList = ({ smartList }: props) => {
	const { _id, icon, label } = smartList;

	return (
		<ListItemButton >
			<ListItemIcon>{icon}</ListItemIcon>

			<ListItemText primary={label} />
		</ListItemButton>
	);
};

export default SmartList;
