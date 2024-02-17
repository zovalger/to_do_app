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
	Icon: ReactElement;
	onChange(date: Date | null): void;
	value: Date | undefined | null;
}

const ButtonDate = ({ Icon, value, onChange }: props) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const openMoreButton = Boolean(anchorEl);

	const handleClickMoreButton = (event: React.MouseEvent<HTMLDivElement>) =>
		setAnchorEl(event.currentTarget);

	const handleCloseMoreButton = () => setAnchorEl(null);

	const [openCalendar, setOpenCalendar] = useState(false);

	const toggleCalendar = () => {
		setOpenCalendar(!openCalendar);
	};

	const handleDelete = () => {
		onChange(null);
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
				}}
			>
				<ListItemButton
					sx={{ flexGrow: 1 }}
					onClick={handleClickMoreButton}
					selected={!!value}
				>
					<ListItemIcon>{Icon}</ListItemIcon>

					<ListItemText
						color="primary"
						primary={"Fecha de vencimiento"}
						secondary={value && moment(value).format("DD-MM-YYYY")}
					/>
				</ListItemButton>

				{value && (
					<Tooltip title="Eliminar Fecha">
						<IconButton
							onClick={handleDelete}
							sx={{
								borderRadius: 0,
								flexShrink: 0,
								width: 48,
								my: 1,
							}}
							color="inherit"
						>
							<DeleteOutlinedIcon />
						</IconButton>
					</Tooltip>
				)}
			</Box>

			<Menu
				id="More-option-list"
				anchorEl={anchorEl}
				open={openMoreButton}
				onClose={handleCloseMoreButton}
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
						handleCloseMoreButton();
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
						handleCloseMoreButton();
						// handleClickOpenConfirmDelete();
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
						handleCloseMoreButton();
						// handleClickOpenConfirmDelete();
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
						handleCloseMoreButton();
						toggleCalendar();
					}}
				>
					<ListItemIcon>
						<CalendarMonthOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Personalizado
				</MenuItem>

				{/* <MenuItem> */}
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

export default ButtonDate;
