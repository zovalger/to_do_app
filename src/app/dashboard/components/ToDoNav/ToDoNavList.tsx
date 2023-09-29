"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SegmentIcon from "@mui/icons-material/Segment";

import InputBase from "@mui/material/InputBase";

import { useTheme } from "@mui/material/styles";
import AddButton from "./AddButton";
import SmartList from "./SmartList";
import SmartListLabels from "./helper/SmartListLabels";

const data = [
	{ icon: <People />, label: "Authentication" },
	{ icon: <Dns />, label: "Database" },
	{ icon: <PermMedia />, label: "Storage" },
	{ icon: <Public />, label: "Hosting" },
];

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

const ToDoNavList = () => {
	const theme = useTheme();

	const [open, setOpen] = useState(true);
	const [openNav, setOpenNav] = useState(false);

	const handdleOpenNav = () => {
		setOpenNav(!openNav);
	};

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
					{SmartListLabels.map((list) => (
						<SmartList key={list._id} smartList={list} />
					))}
				</Box>

				<Divider sx={{ my: 0.5 }} />

				{/* *********************** individual seleccionada *********************** */}
				<ListItemButton selected={true}>
					<ListItemIcon>
						<PermMedia />
					</ListItemIcon>

					<ListItemText primary={"Lista individual"} />
				</ListItemButton>

				{/* *********************** grupo *********************** */}

				<Box>
					<ListItemButton onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<SegmentIcon />
						</ListItemIcon>

						<ListItemText primary="Grupo 1" />
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
						data.map((item) => (
							<ListItemButton
								key={item.label}
								sx={{
									ml: 4,
								}}
							>
								<ListItemIcon sx={{ color: "inherit" }}>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.label} />
							</ListItemButton>
						))}
				</Box>

				{/* *********************** Individual *********************** */}

				<ListItemButton>
					<ListItemIcon>
						<PermMedia />
					</ListItemIcon>

					<ListItemText primary={"Lista individual de nombre largo"} />
				</ListItemButton>
			</Box>

			{/* *********************** anadir lista o grupo *********************** */}

			<AddButton />
		</ToDoNavListStyled>
	);
};

export default ToDoNavList;
