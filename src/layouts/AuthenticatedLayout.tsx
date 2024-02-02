import React from 'react';
import { AppShell, Text } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components';

export const AuthenticatedLayout: React.FC = () => {
	return (
		<AppShell header={{ height: 60 }}>
			<AppShell.Header>
				<Text>Emily Dev</Text>
			</AppShell.Header>
			<AppShell.Navbar>
				<Navbar />
			</AppShell.Navbar>
			<AppShell.Main p={60}>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
};

AuthenticatedLayout.displayName = 'AuthenticatedLahyout';
