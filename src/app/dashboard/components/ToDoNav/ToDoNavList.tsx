"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import InputBase from "@mui/material/InputBase";

import { useTheme } from "@mui/material/styles";
import AddButton from "./AddButton";
import ListInNav from "./ListInNav";
import SmartListTitles from "./helper/SmartListLabels";
import GroupListInNav from "./GroupListInNav";
import { formateGroups } from "./helper/Group.helper";
import { ListData, ListGroupData } from "@/types";

const ToDoNavListStyled = styled(List)<{ component?: React.ElementType }>({
	"& .MuiListItemButton-root": {
		paddingLeft: 16,
		paddingRight: 16,
		position: "relative",
		"& .MuiTypography-root": {
			fontSize: 13,
		},
	},
	"& .MuiListItemButton-root.Mui-selected": {
		"&:after": {
			position: "absolute",
			left: 6,
			top: "auto",
			botton: "auto",
			width: 2,
			height: "60%",
			background: "#0af",
			content: '""',
		},
	},
	"& .MuiListItemIcon-root": {
		minWidth: 0,
		marginRight: 16,
	},
	"& .MuiListItemText-root": {
		whiteSpace: "nowrap",
		overflow: "hidden",
	},

	"& .MuiSvgIcon-root": {
		fontSize: 20,
	},
});

const Lists: ListData[] = [
	{ _id: "1", title: "lista 1", userId: "", guests: [] },
	{ _id: "2", title: "lista 2", userId: "", guests: [] },
	{ _id: "3", title: "lista 3", userId: "", guests: [] },
	{ _id: "4", title: "lista 4", userId: "", guests: [] },
	{ _id: "5", title: "lista 5", userId: "", guests: [] },
	{ _id: "6", title: "lista 6", userId: "", guests: [] },
	{ _id: "7", title: "lista 7", userId: "", guests: [] },
];

const Groups: ListGroupData[] = [
	{ _id: "1", title: "grupo 1", userId: "", lists: ["3"] },
	{ _id: "2", title: "grupo 2", userId: "", lists: ["7", "6"] },
];

const ToDoNavList = () => {
	const theme = useTheme();

	const [open, setOpen] = useState(true);
	const [openNav, setOpenNav] = useState(false);

	const handdleOpenNav = () => {
		setOpenNav(!openNav);
	};

	const { groupAndLists, restLists } = formateGroups(Groups, Lists);

	return (
		<ToDoNavListStyled
			component="nav"
			disablePadding
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
		>
			<Box>
				{/* *********************** Menu icon *********************** */}

				<ListItemButton
					onClick={handdleOpenNav}
					sx={{
						[theme.breakpoints.up("sm")]: { display: "none" },
					}}
				>
					<ListItemIcon sx={{ fontSize: 20 }}>
						<MenuIcon />
					</ListItemIcon>
				</ListItemButton>
				{/* *********************** account *********************** */}

				<ListItemButton component="a" href="#customized-list">
					<Avatar
						sx={{
							mr: 1,
						}}
						src="https://res.cloudinary.com/dpqw06ajr/image/upload/v1686740484/images/frxomwefeytbcsbbaaqs.jpg"
					/>

					<ListItemText
						primary={"German Castro"}
						secondary={"germancastrov30@gmail.com"}
					/>
				</ListItemButton>

				{/* *********************** buscador *********************** */}
				<Paper
					component="form"
					sx={{
						mx: 2,
						mb: 2,
						p: "2px 4px",
						display: "flex",
						alignItems: "center",

						height: 32,
					}}
				>
					<InputBase
						sx={{ ml: 1, flex: 1, fontSize: 13 }}
						placeholder="Buscar"
						inputProps={{ "aria-label": "search " }}
						// value={"hola"}
					/>
					<IconButton sx={{ p: "5px" }} aria-label="Clear">
						<ClearIcon />
					</IconButton>
					<IconButton type="button" sx={{ p: "5px" }} aria-label="search">
						<SearchIcon />
					</IconButton>
				</Paper>

				{/* *********************** Inteligentes *********************** */}

				<Box>
					{SmartListTitles.map((list) => (
						<ListInNav
							key={list._id}
							data={{ ...list, userId: "", guests: [] }}
							icon={list.icon}
						/>
					))}
				</Box>

				<Divider sx={{ my: 0.5 }} />

				{/* *********************** grupo *********************** */}

				{groupAndLists.map(([g, l]) => (
					<GroupListInNav key={g._id} data={g} lists={l} />
				))}

				{restLists.map((item) => (
					<ListInNav key={item._id} data={item} />
				))}
			</Box>

			{/* *********************** anadir lista o grupo *********************** */}

			<AddButton />
		</ToDoNavListStyled>
	);
};

export default ToDoNavList;
