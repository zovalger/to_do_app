"use client";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import { TaskPanelWidth } from "@/config/UISettings";
import { useTaskContext } from "@/app/contexts/Task.context";
import TaskPanelContent from "./TaskPanelContent";
import { useGlobalContext } from "@/app/contexts/Global.context";

const TaskPanel = () => {
	const theme = useTheme();

	const { taskPanelOpen, handleTaskPanelOpen } = useGlobalContext();

	const { taskEditing } = useTaskContext();

	if (!taskPanelOpen) return;
	if (!taskEditing) return;

	const Content = <TaskPanelContent />;

	return (
		<>
			<Drawer
				open={taskPanelOpen}
				variant="permanent"
				anchor="right"
				sx={{
					maxWidth: TaskPanelWidth,
					[theme.breakpoints.down("sm")]: {
						display: "none",
					},
				}}
			>
				{Content}
			</Drawer>

			<Drawer
				open={taskPanelOpen}
				anchor="right"
				variant="temporary"
				onClose={() => handleTaskPanelOpen(false)}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					maxWidth: TaskPanelWidth,
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

export default TaskPanel;
