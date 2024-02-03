import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'node:path';

const resolvePath = (pwd: string) => path.resolve(__dirname, '.', pwd);

const paths: Array<string> = [
	'app',
	'assets',
	'components',
	'configs',
	'features',
	'hooks',
	'interfaces',
	'layouts',
	'lib',
	'modules',
	'providers',
	'types',
	'router',
	'utils',
];

interface Aliases {
	[x: string]: string;
}

const aliases: object = paths.reduce(
	(prevValue: object, currentValue: string): Aliases => ({
		...prevValue,
		['~']: resolvePath('src/'),
		[`@${currentValue}`]: resolvePath(`./src/${currentValue}`),
	}),
	{},
);

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		server: { port: +process.env.VITE_PORT },
		plugins: [react()],
		resolve: {
			alias: {
				...aliases,
			},
		},
	});
};
