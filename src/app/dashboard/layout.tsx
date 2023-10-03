import { GlobalContextProvider } from "../contexts/Global.context";
import { ListAndGroupContextProvider } from "../contexts/ListAndGroup.context";
import { TaskContextProvider } from "../contexts/Task.context";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<GlobalContextProvider>
			<ListAndGroupContextProvider>
				<TaskContextProvider>{children}</TaskContextProvider>
			</ListAndGroupContextProvider>
		</GlobalContextProvider>
	);
}
