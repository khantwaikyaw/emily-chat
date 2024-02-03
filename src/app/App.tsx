import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from '@lib';
import '@mantine/core/styles.css';
import { Router } from '@router';

function App(): React.ReactNode {
	return (
		<>
			<MantineProvider withCssVariables theme={theme}>
				<RouterProvider router={Router} />
			</MantineProvider>
		</>
	);
}

export default App;
