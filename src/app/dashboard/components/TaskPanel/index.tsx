"use client";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";

import { TaskPanelWidth } from "@/config/UISettings";
import { useTaskContext } from "@/app/contexts/Task.context";
import TaskPanelContent from "./TaskPanelContent";

const TaskPanel = () => {
	const theme = useTheme();

	const { taskEditing, setTaskEditing } = useTaskContext();

	const Content = <TaskPanelContent />;

	

	return (
		<>
			<Drawer
				open={!!taskEditing}
				variant="persistent"
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
				open={!!taskEditing}
				anchor="right"
				variant="temporary"
				onClose={() => setTaskEditing(null)}
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
