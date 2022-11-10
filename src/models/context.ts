import { Sequelize } from "sequelize";

import config from "../../config";
import logger from "../utils/logger";
import Aid from "./Aid.js";
import init_associations from "./associations.js";

interface ContextType {
	config?: any;
	sequelize?: Sequelize;
}

const context: ContextType = {};

export const init = async () => {
	if (!context.config) {
		context.config = { dialect: "mysql", ...config.integration.mysql };
		context.sequelize = new Sequelize(
			context.config.database,
			context.config.username,
			context.config.password,
			{
				dialect: context.config.dialect,
				host: context.config.host,
				port: context.config.port,
				logging: (msg) => logger.debug(msg),
				define: {
					freezeTableName: true
				}
			}
		);
	}
	const mysql = context.config;

	// check database connection
	try {
		await context.sequelize.authenticate();
		logger.info(
			`Connected database: ${mysql.host}:${mysql.port}/${mysql.database}`
		);
	} catch (err) {
		logger.error(
			`Failed connecting database: ${mysql.host}:${mysql.port}/${mysql.database} `,
			err
		);
		throw err;
	}

	// define models
	if (context.sequelize) {
		[Aid].forEach((model) => model.initModel(context.sequelize));
	}

	// define model relations
	init_associations();

	// sync model definitions to database tables
	try {
		if (mysql.autoSync) {
			await context.sequelize.sync({ alter: true });
			logger.info("Synced database with models");
		}
	} catch (err) {
		logger.error(`Failed syncing database: `, err);
		throw err;
	}
};

export default context;
