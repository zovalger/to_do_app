"use client";

import { createContext, useState, useContext } from "react";

interface ContextProps {
	asidePanelMobileOpen: boolean;
	handleAsidePanelToggle(): void;
}

const GlobalContext = createContext<ContextProps>({
	asidePanelMobileOpen: false,
	handleAsidePanelToggle: (): void => {},
});

export const GlobalContextProvider = ({ children }: { children: any }) => {
	// ****************************************************************************
	// 										          Panel lateral
	// ****************************************************************************

	const [asidePanelMobileOpen, setAsidePanelMobilOpen] = useState(false);
	const handleAsidePanelToggle = () => setAsidePanelMobilOpen((prev) => !prev);

	return (
		<GlobalContext.Provider
			value={{
				asidePanelMobileOpen,
				handleAsidePanelToggle,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
