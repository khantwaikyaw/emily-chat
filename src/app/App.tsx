import React from 'react';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from '@lib';
import '@mantine/core/styles.css';

function App(): React.ReactNode {
	return (
		<>
			<MantineProvider>
				<RouterProvider router={AppRouter} />
			</MantineProvider>
		</>
	);
}

export default App;
