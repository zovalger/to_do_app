"use client"
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { GlobalContextProvider } from "../contexts/Global.context";
import { ListAndGroupContextProvider } from "../contexts/ListAndGroup.context";
import { TaskContextProvider } from "../contexts/Task.context";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<GlobalContextProvider>
				<ListAndGroupContextProvider>
					<TaskContextProvider>{children}</TaskContextProvider>
				</ListAndGroupContextProvider>
			</GlobalContextProvider>
		</LocalizationProvider>
	);
}
