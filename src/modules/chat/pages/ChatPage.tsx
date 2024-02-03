import React from 'react';
import { Box } from '@mantine/core';
import { ChattingChannel } from '@modules/chat/features/ChattingChannel.tsx';

export const ChatPage: React.FC = () => {
	return (
		<Box>
			<ChattingChannel />
		</Box>
	);
};

ChatPage.displayName = 'ChatPage';
