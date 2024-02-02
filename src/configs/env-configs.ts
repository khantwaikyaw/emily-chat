type IEnvironmentVariables = Map<string, string | number>;

export const envVars: IEnvironmentVariables = new Map<string, string | number>([
	['PORT', import.meta.env.VITE_PORT],
]);
