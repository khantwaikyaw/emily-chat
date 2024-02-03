import React from 'react';
import { Button, Center, Stack, Text } from '@mantine/core';
import { type NavigateFunction, useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
	const navigate: NavigateFunction = useNavigate();
	return (
		<Center h="100vh">
			<Stack>
				<Text>Here is Login</Text>
				<Button onClick={() => navigate('/auth/departments')}>Login</Button>
			</Stack>
		</Center>
	);
};

LoginPage.displayName = 'LoginPage';
