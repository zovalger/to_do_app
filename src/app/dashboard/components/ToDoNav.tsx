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
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SegmentIcon from "@mui/icons-material/Segment";

import InputBase from "@mui/material/InputBase";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import { useTheme } from "@mui/material/styles";

const data = [
	{ icon: <People />, label: "Authentication" },
	{ icon: <Dns />, label: "Database" },
	{ icon: <PermMedia />, label: "Storage" },
	{ icon: <Public />, label: "Hosting" },
];

const ToDoNavWidth = 256;
const ToDoNavList = styled(List)<{ component?: React.ElementType }>({
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

const ToDoNav = () => {
	const theme = useTheme();

	const [open, setOpen] = useState(true);
	const [openNav, setOpenNav] = useState(false);

	const [hoverCheck, setHoverCheck] = useState(false);
	const [important, setImportant] = useState(false);
	const handdleOpenNav = () => {
		setOpenNav(!openNav);
	};

	const NavContent = (
		<ToDoNavList
			component="nav"
			disablePadding
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
		>
			<Box>
				{/* *********************** account *********************** */}

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
					<ListItemButton>
						<ListItemIcon>
							<WbSunnyOutlinedIcon />
						</ListItemIcon>

						<ListItemText primary={"Mi día"} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<StarOutlineOutlinedIcon />
						</ListItemIcon>

						<ListItemText primary={"Importante"} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<ViewWeekOutlinedIcon />
						</ListItemIcon>

						<ListItemText primary={"Planeado"} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<AllInclusiveOutlinedIcon />
						</ListItemIcon>

						<ListItemText primary={"Todo"} />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<CheckCircleOutlinedIcon />
						</ListItemIcon>

						<ListItemText primary={"Completadas"} />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<PersonOutlineOutlinedIcon />
						</ListItemIcon>

						<ListItemText primary={"Asignadas a mi usuario"} />
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<FlagOutlinedIcon />
						</ListItemIcon>

						<ListItemText primary={"Correo electronico marcado"} />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<HomeOutlinedIcon />
						</ListItemIcon>

						<ListItemText primary={"Tareas"} />
					</ListItemButton>
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
		</ToDoNavList>
	);

	return (
		<>
			<Drawer
				open
				variant="permanent"
				sx={{
					maxWidth: ToDoNavWidth,
					[theme.breakpoints.down("sm")]: {
						display: "none",
					},
				}}
			>
				{NavContent}
			</Drawer>

			<Drawer
				open={openNav}
				variant="temporary"
				onClose={handdleOpenNav}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					maxWidth: ToDoNavWidth,
					[theme.breakpoints.up("sm")]: {
						display: "none",
					},
				}}
			>
				{NavContent}
			</Drawer>
		</>
	);
};

export default ToDoNav;
