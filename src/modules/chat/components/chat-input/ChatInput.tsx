import React from 'react';
import { ActionIcon, rem, TextInput } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

export const ChatInput: React.FC = () => {
	return (
		<TextInput
			radius="md"
			size="lg"
			placeholder="Send message"
			rightSectionWidth={42}
			rightSection={
				<ActionIcon
					size={32}
					radius="xl"
					// color={configs.primaryColor}
					variant="filled"
				>
					<IconArrowRight
						style={{ width: rem(18), height: rem(18) }}
						stroke={1.5}
					/>
				</ActionIcon>
			}
		/>
	);
};
