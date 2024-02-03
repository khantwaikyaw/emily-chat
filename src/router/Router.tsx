import { createBrowserRouter } from 'react-router-dom';
import { routes } from '@configs';
import { AuthenticatedLayout, RootLayout } from '@layouts';
import { LoginPage } from '@modules/login/pages';
import { ChatPage } from '@modules/chat/pages';

export const Router = createBrowserRouter([
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
			{
				path: 'auth',
				element: <AuthenticatedLayout />,
				children: [
					{
						path: routes.chat.home,
						element: <ChatPage />,
					},
				],
			},
		],
	},
]);
