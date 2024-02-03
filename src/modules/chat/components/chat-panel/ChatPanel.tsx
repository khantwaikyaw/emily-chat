import React from 'react';
import { Paper } from '@mantine/core';

export const ChatPanel: React.FC = () => {
	return (
		<Paper shadow="xl" p="sm" mih={600} mah={500}>
			Here is Panel
		</Paper>
	);
};

ChatPanel.displayName = 'ChatPanel';
