import React from 'react';
import { Button, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
// import { z } from 'zod';

// const formSchema = z.object({
// 	username: z.string().min(6, { message: 'Invalid username.' }),
// 	password: z.string().min(8, { message: 'Invalid passowrd.' }),
// });

export const LoginForm: React.FC = () => {
	const form = useForm();
	return (
		<form>
			<Stack>
				<TextInput
					label="Username"
					placeholder="Username"
					withAsterisk
					// hideControls
					maxLength={6}
					{...form.getInputProps('username')}
				/>
				<PasswordInput
					label="Password"
					placeholder="Type your password."
					withAsterisk
					{...form.getInputProps('password')}
				/>
				<Button>Login</Button>
			</Stack>
		</form>
	);
};
