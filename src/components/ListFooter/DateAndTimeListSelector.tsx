"use client";
import React, { ReactElement, useRef, useState } from "react";
import moment, { Moment } from "moment";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import FastForwardOutlinedIcon from "@mui/icons-material/FastForwardOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

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

const DateAndTimeListSelector = ({
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
						onChange(new Date(moment().startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<TodayOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Hoy
				</MenuItem>

				<MenuItem
					onClick={() => {
						close();
						onChange(new Date(moment().add(1, "day").startOf("day").format()));
					}}
				>
					<ListItemIcon>
						<EventOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Mañana
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
						<FastForwardOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Semana próxima
				</MenuItem>

				<Divider />

				<MenuItem
					onClick={() => {
						close();
						toggleCalendar();
					}}
				>
					<ListItemIcon>
						<CalendarMonthOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Elegir fecha y hora
				</MenuItem>

				{value && (
					<>
						<Divider />

						<MenuItem sx={{ color: "red" }}>
							<ListItemIcon sx={{ color: "red" }}>
								<DeleteOutlinedIcon fontSize="small" />
							</ListItemIcon>
							Quitar fecha
						</MenuItem>
					</>
				)}
			</Menu>

			{openCalendar && (
				<DateTimePicker
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

export default DateAndTimeListSelector;
