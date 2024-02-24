"use client";

import { useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AlarmIcon from "@mui/icons-material/Alarm";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import Box from "@mui/material/Box";
import { useAppSelector } from "@/redux/store";
import {
	Button,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";

const ListFooter = () => {
	const UI_Settings = useAppSelector((e) => e.UI_Settings);

	const inp = useRef<HTMLInputElement>(null);

	const [focus, setFocus] = useState(false);

	const [title, setTitle] = useState("");

	const handleChange = (value: string) => {
		setTitle(value);
	};

	const handleSubmit = async () => {
		// const newTask = await createTask({
		// 	...DefaultTask,
		// 	title,
		// 	listId: listSelected,
		// });
		// const newarr = [...tasks, newTask];
		// setTasks(newarr);
		// setTasksLocalStorage(newarr);
		// setTitle("");
	};

	const leftIcon = focus ? (
		<RadioButtonUncheckedOutlinedIcon sx={{ fontSize: 20 }} />
	) : (
		<AddOutlinedIcon sx={{ fontSize: 20 }} />
	);

	return (
		<Box
			sx={{
				position: "fixed",
				bottom: 0,
				right: 0,
				left: 0,

				ml: { xs: 0, sm: `${UI_Settings.leftPanelWitdh}px` },
				mr: {
					xs: 0,
					sm: UI_Settings.rightPanelOpen
						? `${UI_Settings.rightPanelWitdh}px`
						: "",
				},

				px: 3,
				pt: 1,
				pb: 4,
				// backdropFilter: "blur(16px)",

				// bgcolor: "#fff8",
			}}
		>
			<Paper
				component="form"
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
				sx={{
					pl: 1.5,
					pr: 1,
					display: "flex",
					alignItems: { xs: "flex-start", md: "center" },
					flexDirection: { xs: "column", md: "row" },
					minHeight: 48,
					".MuiButtonBase-root": {
						px: 1,
						minWidth: 20,
					},
					".MuiSvgIcon-root": {
						color: "#0008",
						fontSize: 20,
					},
					".MuiTypography-root": {
						fontSize: 12,
						color: "#0008",
						ml: 0.5,
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexGrow: 1,
					}}
				>
					{leftIcon}

					<InputBase
						sx={{ ml: 1, flex: 1, fontSize: 13, flexGrow: 1 }}
						value={title}
						inputRef={inp}
						onFocus={() => {
							setFocus(true);
						}}
						onBlur={() => {
							setFocus(false);
						}}
						onChange={({ target: { value } }) => {
							handleChange(value);
						}}
						placeholder="Agregar nueva tarea"
						inputProps={{ "aria-label": "search google maps" }}
					/>
				</Box>

				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Button variant="text" aria-label="directions">
						<AddOutlinedIcon />
						<Typography>tareas</Typography>
					</Button>
					<Button variant="text" aria-label="directions">
						<CalendarMonthIcon />
						<Typography>tareas</Typography>
					</Button>
					<Button variant="text" aria-label="directions">
						<AlarmIcon />
						<Typography>tareas</Typography>
					</Button>
					<Button variant="text" aria-label="directions">
						<EventRepeatIcon />
					</Button>
				</Box>
			</Paper>
		</Box>
	);
};

export default ListFooter;
