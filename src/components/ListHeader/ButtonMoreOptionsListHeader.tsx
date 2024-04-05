"use client";
import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PrintIcon from "@mui/icons-material/Print";
import EmailIcon from "@mui/icons-material/Email";
import PushPinIcon from "@mui/icons-material/PushPin";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";

import IconButton from "@mui/material/IconButton";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ListOptions from "../ToDoNav/ListOptions";
import SmartListOptions from "../ToDoNav/SmartListOptions";
import { useAppSelector } from "@/redux/store";
import useSmartList from "@/hooks/useSmartList";
import { SmartListsIds } from "@/enums";

interface props {
	changeIsEditing(v: boolean): void;
}

const ButtonMoreOptionsListHeader = ({ changeIsEditing }: props) => {
	const { listSelected } = useAppSelector((e) => e.toDoNavProperties);
	const listsIndexed = useAppSelector((e) => e.listsIndexed);

	const { isAnSmartList } = useSmartList();
	const smartId = listSelected as SmartListsIds;
	const smartData = isAnSmartList(smartId);

	const listData = listsIndexed[listSelected];

	const data = smartData || listData;
	// ****************** Menu Desplegable de opciones ******************

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMoreOptions = Boolean(anchorEl);

	// todo: agregar accesibilidad para el movil (mantener pulsado)
	const handleClickOpen = (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		event.preventDefault();
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const onClose = () => {
		setAnchorEl(null);
	};

	const changeName = () => {
		changeIsEditing(true);
	};
	const shareList = () => {};
	const extractFromGroup = () => {};
	const printList = () => {};
	const sendForEmail = () => {};
	const pin = () => {};
	const duplicate = () => {};
	const hidden = () => {};

	return (
		<>
			<IconButton onClick={handleClickOpen} size="small">
				<MoreHorizOutlinedIcon />
			</IconButton>

			{smartData ? (
				<SmartListOptions
					anchorEl={anchorEl}
					close={onClose}
					data={data}
					// 
					hiddeSmartList={hidden}
					printList={printList}
					sendForEmail={sendForEmail}
					pin={pin}
				/>
			) : (
				<ListOptions
					anchorEl={anchorEl}
					close={onClose}
					data={listData}
					// 
					changeName={changeName}
					shareList={shareList}
					extractFromGroup={extractFromGroup}
					printList={printList}
					sendForEmail={sendForEmail}
					pin={pin}
					duplicate={duplicate}
				/>
			)}
		</>
	);
};

export default ButtonMoreOptionsListHeader;
