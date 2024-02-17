"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { TaskAttributes } from "@/types";
import { useTaskContext } from "@/app/contexts/Task.context";
import HoverIconButtom from "./HoverIconButtom";
import { updateTask } from "@/app/services/TasksService";
import { updateTaskInArr } from "@/app/helper/Task.helper";
import { SmartListsLabels } from "@/enums";

interface props {
	data: TaskAttributes;
}
const TaskItemList = ({ data }: props) => {
	const { setTaskEditing, tasks, setTasks } = useTaskContext();
	const { _id, title, important, complete, steps, myDay } = data;

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

	const textLittle: string[] = [];

	if (steps.length)
		textLittle.push(
			`${steps.filter((st) => st.complete).length} de ${steps.length}`
		);

	if (myDay) textLittle.push(SmartListsLabels.myDay);

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
					<Typography
						sx={{
							fontSize: 13,
							textDecoration: complete ? "line-through" : "",
						}}
					>
						{title}
					</Typography>
					<Typography sx={{ fontSize: 11 }}>
						{textLittle.map((t, index) =>
							index !== textLittle.length - 1 ? t + " - " : t
						)}
					</Typography>
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
