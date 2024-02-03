import React from 'react';
import { Center } from '@mantine/core';
import { LoginForm } from '@modules/login/features';

export const LoginPage: React.FC = () => {
	return (
		<Center h="100svh" style={{ border: '1px solid yellow' }}>
			<LoginForm />
		</Center>
	);
};

LoginPage.displayName = 'LoginPage';
