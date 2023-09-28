"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useTheme } from "@mui/material/styles";
import { ToDoNavWidth } from "@/config/UISettings";

const ListHeader = () => {

const theme = useTheme();

	const [open, setOpen] = useState(true);
	const [openNav, setOpenNav] = useState(false);

	const handdleOpenNav = () => {
		setOpenNav(!openNav);
	};


  return (
    <Box
    sx={{
      position: "fixed",
      right: 0,
      left: 0,

      top: 0,

      ml: { xs: 0, sm: `${ToDoNavWidth}px` },
      mr: { xs: 0, sm: `${ToDoNavWidth}px` },

      px: 3,
      pb: 1,
      backdropFilter: "blur(16px)",
      bgcolor: "#fff8",
    }}
    // boxShadow={3}
  >
    <Box sx={{ display: { xs: "block", sm: "none" } }}>
      <IconButton edge="start" onClick={handdleOpenNav}>
        <MenuIcon />
      </IconButton>
    </Box>

    <Box sx={{ display: "flex", pt: { xs: 0, sm: 2 } }}>
      <Typography variant="h5" component="div">
        Titulo de Lista
      </Typography>

      <Box sx={{ ml: "auto" }}>
        <IconButton sx={{ borderRadius: 0 }}>
          <MoreHorizOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
    <Typography component="div" sx={{ fontSize: 13 }}>
      {new Date().toDateString()}
    </Typography>
  </Box>
    
  )
}

export default ListHeader