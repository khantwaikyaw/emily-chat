import React from 'react';
import { AppShell, Group, Text } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components';

export const AuthenticatedLayout: React.FC = () => {
	return (
		<AppShell
			layout="alt"
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm' }}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Text>Emily Dev</Text>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p="md">
				<Navbar />
			</AppShell.Navbar>
			<AppShell.Main bg="grey-[80]">
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
};

AuthenticatedLayout.displayName = 'AuthenticatedLayout';
