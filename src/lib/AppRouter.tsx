import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@layouts/RootLayout.tsx';
import { LoginPage } from '@modules/login/pages/LoginPage.tsx';
import { AuthenticatedLayout } from '@layouts';
import { ChatPage } from '@modules/chat/pages/ChatPage.tsx';
import { routes } from '@configs';

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
