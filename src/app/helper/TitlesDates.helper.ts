import moment from "moment";

export const DueDateTitleHelper = (date: string | null) =>
	date
		? moment(date).isSame(moment(), "day")
			? "Hoy"
			: moment(date).isSame(moment().add(1, "day"))
			? "Mañana"
			: moment(date).format("dd, D MMMM")
		: "Fecha de vencimiento";

export const FrequencyRepeatDateTitleHelper = (date: Date | null) =>
	date ? moment(date).format("DD-MM-YYYY") : "Repetir";

export const RememberDateTitleHelper = (date: Date | null) =>
	date
		? moment(date).isSame(moment(), "day")
			? "Hoy"
			: moment(date).isSame(moment().add(1, "day"))
			? "Mañana"
			: moment(date).format("dd, D MMMM")
		: "";
