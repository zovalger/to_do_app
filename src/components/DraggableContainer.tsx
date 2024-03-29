import { Box, IconButton } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

import React, { useState } from "react";

interface props {
	isDraggable: boolean;
	id: string;
	children: JSX.Element;
}

const DraggableContainer = ({ id, isDraggable, children }: props) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	const dragableatt = isDraggable ? { ...attributes, ...listeners } : {};
	return (
		<Box
			sx={{ display: "flex", alignItems: "center" }}
			ref={setNodeRef}
			style={style}
			{...dragableatt}
		>
			{children}

			{isDraggable && (
				// <IconButton sx={{ borderRadius: 0 }} size="small">
				<DragIndicatorIcon sx={{ mr: 2 }} />
				// </IconButton>
			)}
		</Box>
	);
};

export default DraggableContainer;
