import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { SmartList } from "@/types";

const SmartListLabels: SmartList[] = [
	{ key: "myDay", icon: <WbSunnyOutlinedIcon />, label: "Mi día" },
	{ key: "important", icon: <StarOutlineOutlinedIcon />, label: "Importante" },
	{ key: "planned", icon: <ViewWeekOutlinedIcon />, label: "Planeado" },
	{ key: "todo", icon: <AllInclusiveOutlinedIcon />, label: "Todo" },
	{ key: "complete", icon: <CheckCircleOutlinedIcon />, label: "Completadas" },
	{ key: "toMyUser", icon: <PersonOutlineOutlinedIcon />, label: "Asignadas a mi usuario" },
	{ key: "emailMark", icon: <FlagOutlinedIcon />, label: "Correo electronico marcado" },
	{ key: "task", icon: <HomeOutlinedIcon />, label: "Tareas" },
];
export default SmartListLabels;
