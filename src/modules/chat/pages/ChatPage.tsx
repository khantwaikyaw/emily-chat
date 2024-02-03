import React from 'react';
import { Center } from '@mantine/core';
import { ChattingChannel } from '@modules/chat/features/ChattingChannel.tsx';

export const ChatPage: React.FC = () => {
	return (
		<Center h="100vh">
			<ChattingChannel />
		</Center>
	);
};

ChatPage.displayName = 'ChatPage';
