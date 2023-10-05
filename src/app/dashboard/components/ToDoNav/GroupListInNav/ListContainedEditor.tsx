import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useListAndGroupContext } from "@/app/contexts/ListAndGroup.context";
import { getRemainingLists } from "@/app/helper/Group.helper";
import { ListData, ListGroupData } from "@/types";
import { TextField } from "@mui/material";

interface props {
	open: boolean;
  onClose():void
	listGroup: ListGroupData;
	lists: ListData[];
}
const ListContainedEditor = ({ open,onClose, listGroup, lists }: props) => {
	const { lists: listsContext, listGroups } = useListAndGroupContext();

	getRemainingLists(listGroups, listsContext);

	/* ************************* Agregar/quitar listas ****************************** */



	return (
		<>
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here.
						We will send updates occasionally.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Cancel</Button>
					<Button onClick={onClose}>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default ListContainedEditor;
