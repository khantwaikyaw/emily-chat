interface IRoute {
	label: string;
	path?: string;
	subRoutes?: Array<IRoute>;
}

export const createRoute = (
	label: string,
	path: string,
	subRoutes?: Array<IRoute>,
) => {
	const subRouteProtoType = {
		subRoutes: subRoutes?.map((route) => ({
			label: route.label,
			path: String(route.path),
		})),
	};
	return Object.create(subRouteProtoType, {
		label: { value: label },
		path: { value: String(path) },
	});
};
