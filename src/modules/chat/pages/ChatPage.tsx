import React from 'react';
import { Button, Center, Stack, Text } from '@mantine/core';
import { type NavigateFunction, useNavigate } from 'react-router-dom';

export const ChatPage: React.FC = () => {
	const navigate: NavigateFunction = useNavigate();
	return (
		<Center h="100vh">
			<Stack>
				<Text>Chat</Text>
				<Button onClick={() => navigate('/auth/departments')}>Login</Button>
			</Stack>
		</Center>
	);
};

ChatPage.displayName = 'ChatPage';
