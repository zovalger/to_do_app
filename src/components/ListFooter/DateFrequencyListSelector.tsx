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

import {
	Box,
	Divider,
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	SvgIconTypeMap,
	Tooltip,
} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface props {
	anchorEl: HTMLElement | null;
	onChange(date: Date | null): void;
	close(): void;
	value: Date | undefined | null;
}

const DateFrequencyListSelector = ({
	value,
	anchorEl,
	onChange,
	close,
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

				{value && (
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
				<DatePicker
					sx={{ position: "absolute", opacity: 0 }}
					open={openCalendar}
					onAccept={() => toggleCalendar()}
					onClose={() => toggleCalendar()}
					value={moment(value)}
					onChange={(v) => onChange(v ? new Date(v.format()) : null)}
				/>
			)}
			{/* </MenuItem> */}
		</>
	);
};

export default DateFrequencyListSelector;
