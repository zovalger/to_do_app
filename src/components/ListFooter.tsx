"use client";

import { useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useAppSelector } from "@/redux/store";

const ListFooter = () => {
	const { rightPanelWitdh } = useAppSelector((e) => e.UI_Settings);
	const taskEditing = true;
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

	return (
		<Box
			sx={{
				position: "fixed",
				bottom: 0,
				right: 0,
				left: 0,

				ml: { xs: 0, sm: `${rightPanelWitdh}px` },
				mr: { xs: 0, sm: taskEditing ? `${rightPanelWitdh}px` : "" },

				px: 3,
				pt: 1,
				pb: 4,
				backdropFilter: "blur(16px)",

				// bgcolor: "#fff8",
			}}
		>
			<Paper
				component="form"
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
				sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
			>
				<IconButton sx={{ p: "10px" }} aria-label="menu">
					{focus ? <RadioButtonUncheckedOutlinedIcon /> : <AddOutlinedIcon />}
				</IconButton>

				<InputBase
					sx={{ ml: 1, flex: 1, fontSize: 13 }}
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

				{/* <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
					<DirectionsIcon />
				</IconButton> */}
			</Paper>
		</Box>
	);
};

export default ListFooter;
