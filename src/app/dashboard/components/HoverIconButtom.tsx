"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";

interface props {
	onClick(): void;
	hoverIcon: React.ReactNode;
	idleIcon: React.ReactNode;
	active: boolean;
}

const HoverIconButtom = (props: props & any) => {
	const { onClick, hoverIcon, idleIcon, active }: props = props;

	const [hover, setHover] = useState(false);

	const activeIcon = active ? hoverIcon : hover ? hoverIcon : idleIcon;
	return (
		<IconButton
			{...props}
			onClick={(e) => {
				e.stopPropagation();
				onClick();
			}}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{activeIcon}
		</IconButton>
	);
};

export default HoverIconButtom;
