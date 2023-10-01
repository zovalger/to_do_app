import React, { useState } from "react";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SegmentIcon from "@mui/icons-material/Segment";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import { ListData, ListGroupData } from "@/types";
import ListInNav from "./ListInNav";


interface props {
	data: ListGroupData;
	lists: ListData[];
}

const GroupListInNav = ({ data, lists }: props) => {
	const { title } = data;

	const [open, setOpen] = useState(true);

	return (
		<Box>
			<ListItemButton onClick={() => setOpen(!open)}>
				<ListItemIcon>
					<SegmentIcon />
				</ListItemIcon>

				<ListItemText primary={title} />
				<KeyboardArrowDown
					sx={{
						mr: -1,
						// opacity:,
						transform: open ? "rotate(-180deg)" : "rotate(0)",
						transition: "0.2s",
					}}
				/>
			</ListItemButton>

			{open &&
				lists.map((list) => (
					<ListInNav key={list._id} data={list} inGroup={true} />
				))}
		</Box>
	);
};

export default GroupListInNav;
