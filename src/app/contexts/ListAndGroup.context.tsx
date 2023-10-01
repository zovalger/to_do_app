"use client";

import { createContext, useState, useContext } from "react";

interface ContextProps {
	asidePanelMobileOpen: boolean;
	handleAsidePanelToggle(): void;

	asideMultiToolsOpen: boolean;
	handleAsideMultiToolsToggle(): void;
}

const ListAndGroupContext = createContext<ContextProps>({
	asidePanelMobileOpen: false,
	handleAsidePanelToggle: (): void => {},

	asideMultiToolsOpen: false,
	handleAsideMultiToolsToggle: (): void => {},
});

export const ListAndGroupContextProvider = ({ children }: { children: any }) => {
	// ****************************************************************************
	// 										          Panel lateral
	// ****************************************************************************

	const [asidePanelMobileOpen, setAsidePanelMobilOpen] = useState(false);
	const handleAsidePanelToggle = () => setAsidePanelMobilOpen((prev) => !prev);

	const [asideMultiToolsOpen, setAsideMultiToolsOpen] = useState(false);
	const handleAsideMultiToolsToggle = () =>
		setAsideMultiToolsOpen((prev) => !prev);

	return (
		<ListAndGroupContext.Provider
			value={{
				asidePanelMobileOpen,
				handleAsidePanelToggle,

				asideMultiToolsOpen,
				handleAsideMultiToolsToggle,
			}}
		>
			{children}
		</ListAndGroupContext.Provider>
	);
};

export const useListAndGroupContext = () => useContext(ListAndGroupContext);
