import React, { useState } from "react";
import {
	Box,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from "@mui/material";
import SegmentIcon from "@mui/icons-material/Segment";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import { ListData, ListGroupData } from "@/types";
import ListInNav from "./ListInNav";

interface props {
	data: ListGroupData;
	lists: ListData[];
}

const GroupListInNav = ({ data, lists }: props) => {
	const { title } = data;

	const [ungrouped, setUngrouped] = useState(true);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	
	const open = Boolean(anchorEl);
	
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Box>
				<ListItemButton onClick={() => setUngrouped(!ungrouped)}>
					<ListItemIcon>
						<SegmentIcon />
					</ListItemIcon>

					<ListItemText primary={title} />
					<IconButton onClick={handleClick}>
						<MoreVertOutlinedIcon />
					</IconButton>

					<KeyboardArrowDown
						sx={{
							mr: -1,
							// opacity:,
							transform: ungrouped ? "rotate(-180deg)" : "rotate(0)",
							transition: "0.2s",
						}}
					/>
				</ListItemButton>

				{ungrouped &&
					lists.map((list) => (
						<ListInNav key={list._id} data={list} inGroup={true} />
					))}
			</Box>

			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</>
	);
};

export default GroupListInNav;
