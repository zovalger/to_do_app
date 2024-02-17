"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<Provider store={store}>{children}</Provider>
		</LocalizationProvider>
	);
}
