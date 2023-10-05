"use client";

import { createContext, useState, useContext } from "react";

interface ContextProps {
	asidePanelMobileOpen: boolean;
	handleAsidePanelToggle(): void;

	taskPanelOpen: boolean;
	handleTaskPanelOpen(value?: boolean): void;
}

const GlobalContext = createContext<ContextProps>({
	asidePanelMobileOpen: false,
	handleAsidePanelToggle: (): void => {},

	taskPanelOpen: false,
	handleTaskPanelOpen: (value?: boolean): void => {},
});

export const GlobalContextProvider = ({ children }: { children: any }) => {
	// ****************************************************************************
	// 										          Panel lateral
	// ****************************************************************************

	const [asidePanelMobileOpen, setAsidePanelMobilOpen] = useState(false);
	const handleAsidePanelToggle = () => setAsidePanelMobilOpen((prev) => !prev);

	const [taskPanelOpen, setAsideMultiToolsOpen] = useState(false);
	const handleTaskPanelOpen = (value?: boolean) =>
		setAsideMultiToolsOpen((prev) =>
			typeof value == "boolean" ? value : !prev
		);

	return (
		<GlobalContext.Provider
			value={{
				asidePanelMobileOpen,
				handleAsidePanelToggle,

				taskPanelOpen,
				handleTaskPanelOpen,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
