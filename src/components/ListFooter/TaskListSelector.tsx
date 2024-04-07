"use client";
import React from "react";
import { Menu, MenuItem } from "@mui/material";
import useList from "@/hooks/useList";

interface props {
	anchorEl: HTMLElement | null;
	onChange(value: string): void;
	close(): void;
	value: string;
}

const TaskListSelector = ({ value, anchorEl, onChange, close }: props) => {
	const { getAllList_Title_And_Ids } = useList();

	const allList = getAllList_Title_And_Ids();

	const openMoreButton = Boolean(anchorEl);

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
				{allList.map(({ _id, title }) => (
					<MenuItem
						key={_id}
						onClick={() => {
							close();
							onChange(_id);
						}}
						selected={value == _id}
					>
						{/* <ListItemIcon>
						<TodayOutlinedIcon fontSize="small" />
					</ListItemIcon> */}
						{title}
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

export default TaskListSelector;
