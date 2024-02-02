import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@layouts/RootLayout.tsx';
import { LoginPage } from '@modules/login/pages/LoginPage.tsx';

export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <LoginPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
		],
	},
]);
