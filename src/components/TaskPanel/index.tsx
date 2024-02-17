"use client";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";

// import { TaskPanelWidth } from "@/config/UISettings";
// import { useTaskContext } from "@/app/contexts/Task.context";
import TaskPanelContent from "./TaskPanelContent";
import { useAppSelector } from "@/redux/store";

const TaskPanel = () => {
	const { rightPanelWitdh } = useAppSelector((e) => e.UI_Settings);

	const theme = useTheme();

	const Content = <TaskPanelContent />;

	return (
		<>
			<Drawer
				open={
					false
					// !!taskEditing
				}
				variant="persistent"
				anchor="right"
				sx={{
					maxWidth: rightPanelWitdh,
					[theme.breakpoints.down("sm")]: {
						display: "none",
					},
				}}
			>
				{Content}
			</Drawer>

			<Drawer
				open={false}
				anchor="right"
				variant="temporary"
				// onClose={() => setTaskEditing(null)}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					maxWidth: rightPanelWitdh,
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
