import React from "react";
import { FormatListBulletedOutlined } from "@mui/icons-material";

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { SmartListAttributes } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/store";

import { setListSelected } from "@/redux/Slices/ToDoNavPropertiesSlice";
import { closeLeftPanel } from "@/redux/Slices/UISlice";
import SmartListOptions from "./SmartListOptions";

interface props {
	data: SmartListAttributes;
}

const SmartListItem = ({ data }: props) => {
	const { _id, title, icon } = data;

	const dispatch = useAppDispatch();

	const { listSelected } = useAppSelector((e) => e.toDoNavProperties);

	// ****************** funciones para botones ******************

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const onClose = () => {
		setAnchorEl(null);
	};

	const handdleClick = () => {
		dispatch(closeLeftPanel());
		dispatch(setListSelected(_id));
	};

	const handleRightClick = (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		event.preventDefault();
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const printList = () => {};
	const sendForEmail = () => {};
	const pin = () => {};
	const hiddenList = () => {};

	return (
		<>
			<ListItemButton
				sx={{
					transition: "margin-bottom 200ms, background 200ms",
				}}
				onClick={handdleClick}
				onContextMenu={handleRightClick}
				selected={_id === listSelected}
			>
				<ListItemIcon>{icon || <FormatListBulletedOutlined />}</ListItemIcon>

				<ListItemText primary={title} />
			</ListItemButton>

			<SmartListOptions
				data={data}
				anchorEl={anchorEl}
				close={onClose}
				printList={printList}
				sendForEmail={sendForEmail}
				pin={pin}
				hiddeSmartList={hiddenList}
			/>
		</>
	);
};

export default SmartListItem;
