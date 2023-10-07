import { DateTimePicker } from "@mui/x-date-pickers";
import { InputBase, TextField } from "@mui/material";
import moment, { Moment } from "moment";
import React, { useState } from "react";

const ButtonDate = () => {
	const [date, setDate] = useState<Moment>();
	return (
		<>
			<DateTimePicker value={date} onChange={(v) => setDate(moment(v))} />
	
		</>
	);
};

export default ButtonDate;
