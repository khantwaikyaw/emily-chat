import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '@lib';
import { Router } from '@router';
import '@mantine/core/styles.css';

const App: React.FC = () => {
	return (
		<MantineProvider theme={theme}>
			<RouterProvider router={Router} />
		</MantineProvider>
	);
};

export default App;
