"use client";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import ToDoNavList from "./ToDoNavList";
import { ToDoNavWidth } from "@/config/UISettings";


const ToDoNav = () => {
	const theme = useTheme();

	const [openNav, setOpenNav] = useState(false);

	const handdleOpenNav = () => {
		setOpenNav(!openNav);
	};

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
				<ToDoNavList />
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
				<ToDoNavList />
			</Drawer>
		</>
	);
};

export default ToDoNav;
