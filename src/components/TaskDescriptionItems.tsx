"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { TaskAttributes } from "@/types";
import HoverIconButtom from "./HoverIconButtom";
import { updateTaskInArr } from "@/app/helper/Task.helper";
import { SmartListsLabels, taskListItemVariant } from "@/enums";
import moment from "moment";
import { DueDateTitleHelper } from "@/app/helper/TitlesDates.helper";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";

interface props {
	data: TaskAttributes;
	variant?: taskListItemVariant;
}
const TaskDescriptionItems = ({ data, variant }: props) => {
	// const { setTaskEditing, tasks, setTasks } = useTaskContext();
	const { _id, steps, myDay, dueDate, repeat, remindMe, note, files } = data;

	const textLittle: JSX.Element[] = [];

	const textLittleWithoutSeparator: JSX.Element[] = [];

	// todo: comparar lista seleccionada con myDay
	// todo: para intercambiar entre nombre de lista y lista inteligente
	if (myDay) textLittle.push(<>{SmartListsLabels.myDay}</>);
	if (myDay) textLittle.push(<>{"Lista de tarea"}</>);

	if (steps.length)
		textLittle.push(
			<>{`${steps.filter((st) => st.complete).length} de ${steps.length}`}</>
		);

	if (dueDate)
		textLittle.push(
			<>
				<CalendarMonthIcon />
				{DueDateTitleHelper(dueDate)}
			</>
		);

	if (repeat) textLittleWithoutSeparator.push(<LoopOutlinedIcon />);
	if (remindMe) textLittleWithoutSeparator.push(<NotificationsIcon />);
	if (files.length) textLittleWithoutSeparator.push(<AttachFileIcon />);
	if (note) textLittleWithoutSeparator.push(<NoteOutlinedIcon />);

	const separatorBullet = <Box>•</Box>;

	return (
		<>
			<Typography
				sx={{
					fontSize: 11,
					maxWidth: variant === taskListItemVariant.suggestions ? 180 : "100%",
					whiteSpace: "nowrap",
					overflow: "hidden",
					// textOverflow: "ellipsis",
					".MuiBox-root": {
						mr: 0.8,
						display: "inline-block",
					},
					".MuiSvgIcon-root": {
						fontSize: 11,
						mr: 0.5,
						lineHeight: 0,
					},
				}}
			>
				{textLittle.map((t, index) => (
					<>
						<Box key={index} component={"span"}>
							{t}
						</Box>

						{index !== textLittle.length - 1 && separatorBullet}
					</>
				))}

				{textLittleWithoutSeparator.map((t, index) => (
					<>
						<Box key={index} component={"span"}>
							{t}
						</Box>
					</>
				))}
			</Typography>
		</>
	);
};

export default TaskDescriptionItems;
