"use client";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";

import TaskPanelContent from "./TaskPanelContent";
import { useAppSelector } from "@/redux/store";

const TaskEditingPanel = () => {
	const { rightPanelWitdh, rightPanelOpen } = useAppSelector(
		(e) => e.UI_Settings
	);

	const theme = useTheme();

	const Content = <TaskPanelContent />;

	return (
		<>
			<Drawer
				open={rightPanelOpen}
				variant="persistent"
				anchor="right"
				sx={{
					maxWidth: rightPanelWitdh,
					[theme.breakpoints.down("md")]: {
						display: "none",
					},
				}}
			>
				{Content}
			</Drawer>

			<Drawer
				open={rightPanelOpen}
				anchor="right"
				variant="temporary"
				// onClose={() => setTaskEditing(null)}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					maxWidth: rightPanelWitdh,
					[theme.breakpoints.down("sm")]: {
						display: "none",
					},
					[theme.breakpoints.up("md")]: {
						display: "none",
					},
				}}
			>
				{Content}
			</Drawer>

			<Drawer
				open={rightPanelOpen}
				anchor="right"
				variant="temporary"
				// onClose={() => setTaskEditing(null)}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					// maxWidth: rightPanelWitdh,
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

export default TaskEditingPanel;
