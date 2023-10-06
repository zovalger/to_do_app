"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { TaskData } from "@/types";
import { useTaskContext } from "@/app/contexts/Task.context";
import HoverIconButtom from "./HoverIconButtom";
import { updateTask } from "@/app/services/TasksService";
import { updateTaskInArr } from "@/app/helper/Task.helper";

interface props {
	data: TaskData;
}
const TaskItemList = ({ data }: props) => {
	const { setTaskEditing, tasks, setTasks } = useTaskContext();
	const { _id, title, important, complete, steps } = data;

	const handleClickContent = () => {
		setTaskEditing(data);
	};

	const handleImportantButton = async () => {
		const newTask = await updateTask(_id, { ...data, important: !important });

		const newTasks = updateTaskInArr(tasks, _id, newTask);

		setTasks(newTasks);
		setTaskEditing(null);
	};

	const handleCompleteButton = async () => {
		const newTask = await updateTask(_id, { ...data, complete: !complete });

		const newTasks = updateTaskInArr(tasks, _id, newTask);

		setTasks(newTasks);
		setTaskEditing(null);
	};

	const textSteps = steps.length
		? `${steps.filter((st) => st.complete).length} de ${steps.length}`
		: "";

	return (
		<>
			<Box
				onClick={handleClickContent}
				sx={{
					display: "flex",
					alignItems: "center",
					py: 0.7,
					px: 0.5,
					mb: 1,
					bgcolor: "#eee",
					cursor: "pointer",

					":hover": { bgcolor: "#ddd" },
					"& .MuiSvgIcon-root": {
						fontSize: 20,
					},
				}}
			>
				<HoverIconButtom
					active={complete}
					hoverIcon={<CheckCircleOutlinedIcon />}
					idleIcon={<RadioButtonUncheckedOutlinedIcon />}
					onClick={handleCompleteButton}
				/>

				<Box sx={{ flexGrow: 1 }}>
					<Typography sx={{ fontSize: 13 }}>{title}</Typography>
					<Typography sx={{ fontSize: 11 }}>{textSteps}</Typography>
				</Box>

				<HoverIconButtom
					active={important}
					color="secondary"
					hoverIcon={<StarOutlinedIcon />}
					idleIcon={<StarOutlineOutlinedIcon />}
					onClick={handleImportantButton}
				/>
			</Box>
		</>
	);
};

export default TaskItemList;
