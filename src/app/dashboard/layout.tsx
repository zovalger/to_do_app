import { ListAndGroupContextProvider } from "../contexts/ListAndGroup.context";
import { TaskContextProvider } from "../contexts/Task.context";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ListAndGroupContextProvider>
			<TaskContextProvider>{children}</TaskContextProvider>
		</ListAndGroupContextProvider>
	);
}
