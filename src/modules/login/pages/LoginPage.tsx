import React from 'react';
import { Box, Center } from '@mantine/core';
import { LoginForm } from '@modules/login/features';

export const LoginPage: React.FC = () => {
	return (
		<Center h="100svh">
			<Box w={300}>
				<LoginForm />
			</Box>
		</Center>
	);
};

LoginPage.displayName = 'LoginPage';
