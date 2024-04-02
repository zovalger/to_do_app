"use client";
import React, { useState, forwardRef } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface props extends IconButtonProps {
	hover_icon: JSX.Element;
	idle_icon: JSX.Element;
	is_hover: boolean;
}

const hover_iconButton = forwardRef<HTMLButtonElement, props>((props, ref) => {
	const { is_hover, hover_icon, idle_icon, size } = props;

	const [hover, setHover] = useState(false);

	const activeIcon = is_hover ? hover_icon : hover ? hover_icon : idle_icon;
	return (
		<IconButton
			{...{ ...props, is_hover: "" }}
			ref={ref}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			sx={{ ".MuiSvgIcon-root": { fontSize: size == "large" ? 24 : 20 } }}
		>
			{activeIcon}
		</IconButton>
	);
});

hover_iconButton.displayName = "hover_iconButton";

export default hover_iconButton;
