import React, { useState } from "react";
import PrintIcon from "@mui/icons-material/Print";
import EmailIcon from "@mui/icons-material/Email";
import PushPinIcon from "@mui/icons-material/PushPin";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { ListItemIcon, Menu, MenuItem } from "@mui/material";

import { SmartListAttributes } from "@/types";
import { useAppSelector } from "@/redux/store";
import useList from "@/hooks/useList";

interface props {
	anchorEl: HTMLElement | null;
	close(): void;
	data: Pick<SmartListAttributes, "title" | "_id">;

	printList(): void;
	sendForEmail(): void;
	pin(): void;
	hiddeSmartList(): void;
}

const SmartListOptions = ({
	data,
	anchorEl,

	close,
	printList,
	sendForEmail,
	pin,
	hiddeSmartList,
}: props) => {
	const { _id, title } = data;

	const openMoreButton = Boolean(anchorEl);

	// **********************************

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
				<MenuItem onClick={printList}  disabled>
					<ListItemIcon>
						<PrintIcon fontSize="small" />
					</ListItemIcon>
					Imprimir esta lista
				</MenuItem>
				<MenuItem onClick={sendForEmail} disabled>
					<ListItemIcon>
						<EmailIcon fontSize="small" />
					</ListItemIcon>
					Enviar lista por correo electrónico
				</MenuItem>
				<MenuItem onClick={pin} disabled>
					<ListItemIcon>
						<PushPinIcon fontSize="small" />
					</ListItemIcon>
					Anclar a inicio
				</MenuItem>
				<MenuItem onClick={hiddeSmartList} disabled>
					<ListItemIcon>
						<VisibilityOffIcon fontSize="small" />
					</ListItemIcon>
					Ocultar lista inteligente
				</MenuItem>
			</Menu>
		</>
	);
};

export default SmartListOptions;
