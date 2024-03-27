import React, { useState } from "react";
import { FormatListBulletedOutlined } from "@mui/icons-material";

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import { OrderList } from "@/types";
import { useAppSelector } from "@/redux/store";
import ListOptions from "./ListOptions";

interface props {
	data: OrderList;
}

const ListItem = ({ data }: props) => {
	const { _id } = data;
	const listsIndexed = useAppSelector((e) => e.listsIndexed);

	const { title, parentId } = listsIndexed[`${_id}`];

	const [isEditing, setIsEditing] = useState(false);

	// ****************** funciones para botones ******************

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const onClose = () => {
		setAnchorEl(null);
	};

	const onClick = () => {
		// setListSelected(_id);
		// handleAsidePanelToggle()
	};

	// todo: agregar accesibilidad para el movil (mantener pulsado)
	const handleRightClick = (
		event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		event.preventDefault();
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const changeName = () => {
		setIsEditing(true);
		onClose();
	};
	const shareList = () => {};
	const extractFromGroup = () => {};
	const printList = () => {};
	const sendForEmail = () => {};
	const pin = () => {};
	const duplicate = () => {};

	if (!title) return "datos no encontrados";

	return (
		<>
			<ListItemButton
				onClick={onClick}
				onContextMenu={handleRightClick}
				selected={
					false
					// _id === listSelected
				}
			>
				<ListItemIcon sx={parentId ? { ml: 4.5 } : {}}>
					<FormatListBulletedOutlined />
				</ListItemIcon>

				{isEditing ? (
					<Paper
						component="form"
						sx={{
							// mx: 2,

							p: "2px 4px",
							display: "flex",
							alignItems: "center",

							height: 32,
						}}
					>
						<InputBase
							sx={{ ml: 1, flex: 1, fontSize: 13 }}
							placeholder="Buscar"
							inputProps={{ "aria-label": "search " }}
							// value={"hola"}
						/>
					</Paper>
				) : (
					<ListItemText primary={title} />
				)}
			</ListItemButton>

			<ListOptions
				data={data}
				anchorEl={anchorEl}
				close={onClose}
				changeName={changeName}
				shareList={shareList}
				extractFromGroup={extractFromGroup}
				printList={printList}
				sendForEmail={sendForEmail}
				pin={pin}
				duplicate={duplicate}
			/>
		</>
	);
};

export default ListItem;
