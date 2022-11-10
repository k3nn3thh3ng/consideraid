import { name, version, description } from "./package.json";

const NODE_ENV = process.env.NODE_ENV;

const config = {
	app: {
		name,
		version,
		description,
		port: 3000
	},
	integration: {
		mysql: {
			database: process.env.MYSQL_DATABASE || "rakeback",
			host: process.env.MYSQL_HOST || "localhost",
			port: parseInt(process.env.MYSQL_PORT || "3306"),
			username: process.env.MYSQL_USERNAME || "root",
			password: process.env.MYSQL_PASSWORD || "password",
			autoSync: NODE_ENV === "development"
		}
	}
};

export default config;