import React from 'react';
import { Stack } from '@mantine/core';
import { ChatInput, ChatPanel } from '@modules/chat/components';

export const ChattingChannel: React.FC = () => {
	// const [value, setValue] = useState<number>(0);
	//
	// const { broadcast } = useBroadcastChannel<number>({
	// 	channelName: 'count-channel',
	// 	messageHandler: (message: MessageEvent<number>) => {
	// 		console.log('here', message.data);
	// 		setValue(message.data);
	// 	},
	// });

	return (
		<Stack justify="stretch">
			<ChatPanel />
			<ChatInput />
		</Stack>
	);
};

ChattingChannel.displayName = 'ChattingChannel';
