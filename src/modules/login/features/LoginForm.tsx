import React from 'react';
import { Button, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export const LoginForm: React.FC = () => {
	const form = useForm();
	return (
		<form style={{ border: '1px solid green' }}>
			<Stack bg="blue">
				<TextInput
					label="Username"
					description="Type your username."
					// hideControls
					maxLength={6}
					{...form.getInputProps('username')}
				/>
				<PasswordInput
					label="Password"
					description="Type your password."
					withAsterisk
					{...form.getInputProps('password')}
				/>{' '}
				<Button>Login</Button>
			</Stack>
		</form>
	);
};
