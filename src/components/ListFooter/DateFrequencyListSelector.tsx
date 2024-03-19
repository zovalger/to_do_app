"use client";
import React, { ReactElement, useRef, useState } from "react";
import moment, { Moment } from "moment";

import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SwitchAccessShortcutIcon from "@mui/icons-material/SwitchAccessShortcut";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";

interface props {
	anchorEl: HTMLElement | null;
	onChange(date: Date | null): void;
	close(): void;
	value: Date | undefined | null;deleteButton?: boolean;
}

const DateFrequencyListSelector = ({
	value,
	anchorEl,
	onChange,
	close,	deleteButton,
}: props) => {
	const openMoreButton = Boolean(anchorEl);

	const [openCalendar, setOpenCalendar] = useState(false);

	const toggleCalendar = () => {
		setOpenCalendar(!openCalendar);
	};

	const handleDelete = () => {
		onChange(null);
	};

	return (
		<>
			<Menu
				id="More-option-list"
				anchorEl={anchorEl}
				open={openMoreButton}
				onClose={close}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				{/* // todo: hacer que el boton cambiar nombre funcione */}

				<MenuItem
					onClick={() => {
						close();
						// handleClickOpenConfirmDelete();
						//onChange(new Date(moment().startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<TodayOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Diariamente
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						onChange(new Date(moment().add(1, "day").startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<WorkOutlineIcon fontSize="small" />
					</ListItemIcon>
					Dias laborales
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						onChange(
							new Date(moment().add(1, "week").startOf("isoWeek").format())
						);
					}}
				>
					<ListItemIcon>
						<CalendarViewWeekIcon fontSize="small" />
					</ListItemIcon>
					Semanalmente
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						onChange(
							new Date(moment().add(1, "week").startOf("isoWeek").format())
						);
					}}
				>
					<ListItemIcon>
						<CalendarMonthIcon fontSize="small" />
					</ListItemIcon>
					Mensualmente
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						onChange(
							new Date(moment().add(1, "week").startOf("isoWeek").format())
						);
					}}
				>
					<ListItemIcon>
						<SwitchAccessShortcutIcon fontSize="small" />
					</ListItemIcon>
					Anualmente
				</MenuItem>

				<Divider />

				<MenuItem
					onClick={() => {
						close();
						toggleCalendar();
					}}
				>
					<ListItemIcon>
						<EventRepeatIcon fontSize="small" />
					</ListItemIcon>
					Personalizado
				</MenuItem>

				{deleteButton && value && (
					<>
						<Divider />

						<MenuItem sx={{ color: "red" }}>
							<ListItemIcon sx={{ color: "red" }}>
								<DeleteOutlinedIcon fontSize="small" />
							</ListItemIcon>
							No repetir nunca
						</MenuItem>
					</>
				)}
			</Menu>

			{openCalendar && (
				<Dialog
					open={openCalendar}
					onClose={() => toggleCalendar()}
					PaperProps={{
						component: "form",
						onSubmit: () => {
							toggleCalendar();
						},
					}}
				>
					<DialogTitle variant="subtitle1" sx={{ fontWeight: 600, pb: 1 }}>
						Repita cada...
					</DialogTitle>
					<DialogContent sx={{ pb: 1 }}>
						<TextField
							autoFocus
							required
							margin="dense"
							type="number"
							variant="standard"
							sx={{ maxWidth: 48 }}
						/>

						<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
							<Select
								// value={10}
								// onChange={handleChange}
								// label="Age"
								inputProps={{ sx: { px: 1 } }}
							>
								<MenuItem value={10}>días</MenuItem>
								<MenuItem value={20}>semanas</MenuItem>
								<MenuItem value={30}>meses</MenuItem>
								<MenuItem value={30}>años</MenuItem>
							</Select>
						</FormControl>
					</DialogContent>
					<DialogActions>
						<Button variant="outlined" onClick={() => toggleCalendar()}>
							Cancelar
						</Button>
						<Button variant="contained" type="submit">
							Guardar
						</Button>
					</DialogActions>
				</Dialog>
			)}

			{/* </MenuItem> */}
		</>
	);
};

export default DateFrequencyListSelector;
