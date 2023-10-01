"use client";

import { createContext, useState, useContext } from "react";

interface ContextProps {
	asidePanelMobileOpen: boolean;
	handleAsidePanelToggle(): void;

	asideMultiToolsOpen: boolean;
	handleAsideMultiToolsToggle(): void;
}

const GlobalContext = createContext<ContextProps>({
	asidePanelMobileOpen: false,
	handleAsidePanelToggle: (): void => {},

	asideMultiToolsOpen: false,
	handleAsideMultiToolsToggle: (): void => {},
});

export const GlobalContextProvider = ({ children }: { children: any }) => {
	// ****************************************************************************
	// 										          Panel lateral
	// ****************************************************************************

	const [asidePanelMobileOpen, setAsidePanelMobilOpen] = useState(false);
	const handleAsidePanelToggle = () => setAsidePanelMobilOpen((prev) => !prev);

	const [asideMultiToolsOpen, setAsideMultiToolsOpen] = useState(false);
	const handleAsideMultiToolsToggle = () =>
		setAsideMultiToolsOpen((prev) => !prev);

	return (
		<GlobalContext.Provider
			value={{
				asidePanelMobileOpen,
				handleAsidePanelToggle,

				asideMultiToolsOpen,
				handleAsideMultiToolsToggle,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
