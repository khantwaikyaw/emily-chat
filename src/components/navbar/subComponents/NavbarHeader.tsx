import React from 'react';
import { AppShell, Card, Group, Image, Title } from '@mantine/core';
import emilyhub from '@assets/images/emilyhub.jpg';
import { getImageUrl } from '@utils';

const brandLogo: string = getImageUrl(emilyhub);
const BrandImage: React.FC = () => (
	<Image
		alt="Emily"
		src={brandLogo}
		radius={10}
		h={60}
		w="auto"
		fit="contain"
	/>
);

BrandImage.displayName = 'BrandImage';

export const NavbarHeader: React.FC = () => (
	<AppShell.Section p="xs">
		<Card shadow="xs" radius="md" withBorder>
			<Card.Section>
				<Group p="xs" grow wrap="nowrap">
					<BrandImage />
					<Title order={3}>Emily</Title>
				</Group>
			</Card.Section>
		</Card>
	</AppShell.Section>
);

NavbarHeader.displayName = 'NavbarHeader';
