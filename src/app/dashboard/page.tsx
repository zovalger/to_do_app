"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Avatar from "@mui/material/Avatar";
import InputAdornment from "@mui/material/InputAdornment";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
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

const data = [
	{ icon: <People />, label: "Authentication" },
	{ icon: <Dns />, label: "Database" },
	{ icon: <PermMedia />, label: "Storage" },
	{ icon: <Public />, label: "Hosting" },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
	"& .MuiListItemButton-root": {
		paddingLeft: 16,
		paddingRight: 16,
		position: "relative",
	},
	"& .MuiListItemButton-root.Mui-selected": {
		"&:after": {
			position: "absolute",
			left: 6,
			top: "auto",
			botton: "auto",
			width: 2,
			height: "60%",
			background: "#fff",
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

export default function DashboardPage() {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					// height: "100vh",
				}}
			>
				<Box sx={{ display: "flex" }}>
					<ThemeProvider
						theme={createTheme({
							components: {
								MuiListItemButton: {
									defaultProps: {
										disableTouchRipple: true,
									},
								},
							},
							palette: {
								mode: "dark",
								primary: {
									main: "rgb(150, 157, 246)",
								},
								background: { paper: "rgb(5, 30, 52)" },
							},
						})}
					>
						<Paper elevation={0} sx={{ maxWidth: 256 }}>
							<FireNav component="nav" disablePadding>
								<ListItemButton component="a" href="#customized-list">
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
										// width: 400,
									}}
								>
									<InputBase
										sx={{ ml: 1, flex: 1 }}
										placeholder="Search"
										inputProps={{ "aria-label": "search " }}
										// value={"hola"}
									/>
									<IconButton sx={{ p: "10px" }} aria-label="menu">
										<ClearIcon />
									</IconButton>
									<IconButton
										type="button"
										sx={{ p: "10px" }}
										aria-label="search"
									>
										<SearchIcon />
									</IconButton>
								</Paper>

								{/* *********************** Inteligentes *********************** */}

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
									<ListItemButton
										alignItems="flex-start"
										onClick={() => setOpen(!open)}
									>
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
							</FireNav>
						</Paper>
					</ThemeProvider>
				</Box>
			</Box>
		</>
	);
}
