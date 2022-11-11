import origin from "../package.json";

const config = {
	app: {
		name: origin.name,
		version: origin.version
	},
	api: {
		backend: process.env.backend || ""
	}
};

export default config;
