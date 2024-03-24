"use client";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import ToDoNavList from "./ToDoNavList";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toggleLeftPanel } from "@/redux/Slices/UISlice";

const ToDoNav = () => {
	const theme = useTheme();

	const { leftPanelWitdh, leftPanelOpen } = useAppSelector(
		(e) => e.UI_Settings
	);

	const dispatch = useAppDispatch();

	const Content = <ToDoNavList />;

	return (
		<>
			<Drawer
				open
				variant="permanent"
				sx={{
					maxWidth: leftPanelWitdh,
					width: leftPanelWitdh,
					[theme.breakpoints.down("sm")]: {
						display: "none",
					},
				}}
			>
				{Content}
			</Drawer>

			<Drawer
				open={leftPanelOpen}
				variant="temporary"
				onClose={() => dispatch(toggleLeftPanel())}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					maxWidth: leftPanelWitdh,
					width: leftPanelWitdh,
					[theme.breakpoints.up("sm")]: {
						display: "none",
					},
				}}
			>
				{Content}
			</Drawer>
		</>
	);
};

export default ToDoNav;
