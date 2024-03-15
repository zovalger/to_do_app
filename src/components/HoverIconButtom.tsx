"use client";
import React, { useState, forwardRef } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface props extends IconButtonProps {
	hoverIcon: JSX.Element;
	idleIcon: React.ReactNode;
	active: boolean;
}

const HoverIconButtom = forwardRef<HTMLButtonElement, props>((props, ref) => {
	const { active, hoverIcon, idleIcon, size } = props;

	const [hover, setHover] = useState(false);

	const activeIcon = active ? hoverIcon : hover ? hoverIcon : idleIcon;
	return (
		<IconButton
			{...props}
			ref={ref}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			sx={{ ".MuiSvgIcon-root": { fontSize: size == "large" ? 24 : 20 } }}
		>
			{activeIcon}
		</IconButton>
	);
});

HoverIconButtom.displayName = "HoverIconButtom";

export default HoverIconButtom;
