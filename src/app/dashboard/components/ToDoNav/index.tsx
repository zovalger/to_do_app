"use client";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import ToDoNavList from "./ToDoNavList";
import { ToDoNavWidth } from "@/config/UISettings";
import { useGlobalContext } from "@/app/contexts/Global.context";

const ToDoNav = () => {
	const theme = useTheme();
	const { asidePanelMobileOpen, handleAsidePanelToggle } = useGlobalContext();

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
				open={asidePanelMobileOpen}
				variant="temporary"
				onClose={handleAsidePanelToggle}
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
