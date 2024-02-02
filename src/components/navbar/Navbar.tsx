import React from 'react';
import { NavbarHeader } from '@components/navbar/subComponents/NavbarHeader.tsx';

export const Navbar: React.FC = () => {
	return (
		<>
			<NavbarHeader />
			{/*<Divider m="xs" />*/}
			{/*<NavbarMenu />*/}
			{/*<NavbarFooter />*/}
		</>
	);
};

Navbar.displayName = 'Navbar';
