"use client";

import { useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Box from "@mui/material/Box";
import { Formik, useFormik } from "formik";

import { useAppSelector } from "@/redux/store";
import DueDateButton from "./DueDateButton";
import RememberDateButton from "./RememberDateButton";
import FrequencyRepeatDateButton from "./FrequencyRepeatDateButton";
import TaskListButton from "./TaskListButton";

import TaskValidator from "@/validators/TaskValidators";
import { taskDefaultValues } from "@/defaultValues";
import useTask from "@/hooks/useTask";

const ListFooter = () => {
	const UI_Settings = useAppSelector((e) => e.UI_Settings);

	const { createTask } = useTask();

	const inp = useRef<HTMLInputElement>(null);
	const [focus, setFocus] = useState(false);

	const formik = useFormik({
		initialValues: taskDefaultValues(),
		validationSchema: TaskValidator,
		onSubmit: async (data) => {
			const { listId } = data;

			createTask(listId, data);

			formik.setValues(taskDefaultValues());
		},
	});

	const leftIcon =
		focus || formik.values.title ? (
			<RadioButtonUncheckedOutlinedIcon />
		) : (
			<AddOutlinedIcon />
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
					md: UI_Settings.rightPanelOpen
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
				onSubmit={formik.handleSubmit}
				sx={{
					pl: 1.5,
					pr: 1,
					width: 1,
					display: "flex",
					alignItems: { xs: "flex-start", md: "center" },
					justifyContent: { xs: "flex-start", md: "space-between" },
					flexDirection: { xs: "column", md: "row" },
					// flexWrap: "nowrap",
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
						alignItems: "center",
						flexGrow: 1,
						width: { xs: "100%", md: "" },
					}}
				>
					{leftIcon}

					<InputBase
						sx={{
							ml: 1,
							fontSze: 13,
							flexGrow: 1,
							minHeight: 48,
						}}
						name="title"
						value={formik.values.title}
						onChange={formik.handleChange}
						inputRef={inp}
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
						// onKeyDown={(e) => {
						// 	if (e.key === "Enter") formik.handleSubmit();
						// }}
						placeholder="Agregar nueva tarea"
						inputProps={{
							style: { fontSize: 13 },
						}}
						autoComplete="none"
					/>
				</Box>

				<Box
					sx={{
						display: "flex",
						// overflow: "hidden",
						overflowX: "auto",
						scrollbarWidth: "thin",
						// width: { xs: "100%", md: "1%" },

						// justifyContent: { xs: "flex-start" },
						// flexGrow: 2,
						// ml: "auto",
						// flexShrink: 1,
						// flexGrow: 1,
						// mb: { xs: 1, md: 0 },

						".MuiButtonBase-root": {
							flexShrink: 0,
							textTransform: "none",
						},
					}}
				>
					<TaskListButton data={formik.values} />

					{/* <Button
						variant="text"
						aria-label="directions"
						sx={{ ".MuiButtonBase-root": { pl: 0 } }}
					>
						<AddOutlinedIcon />
						<Typography>Lista</Typography>
					</Button> */}

					<DueDateButton />

					<RememberDateButton />

					<FrequencyRepeatDateButton />
				</Box>
			</Paper>
		</Box>
	);
};

export default ListFooter;
