import React, { useState } from 'react';
import { Box, Button } from '@mantine/core';
import { useBroadcastChannel } from '@modules/chat/hooks/useBroadcastChannel.ts';

export const ChattingChannel: React.FC = () => {
	const [value, setValue] = useState(0);

	const { broadcast } = useBroadcastChannel<number>({
		channelName: 'count-channel',
		messageHandler: (message: MessageEvent<number>) => {
			console.log('here', message.data);
			setValue(message.data);
		},
	});

	return (
		<Box>
			Hello
			<Button onClick={() => broadcast(value + 1)}>Click</Button>
		</Box>
	);
};

ChattingChannel.displayName = 'ChattingChannel';
