import _ from "lodash";
import { format, transports, createLogger } from "winston";
import { logLevel } from "kafkajs";

import config from "../../config";

const customLogger = (level = "debug") =>
	createLogger({
		level: level,
		format: format.combine(
			format((info) => {
				if (typeof info.message === "object") {
					info.message = JSON.stringify(info.message, null, 2);
				}
				return info;
			})(),
			format.timestamp({ format: "YYYY-MM-DDTHH:mm:ss.SSS" }),
			format.errors({ stack: true }),
			format.printf(
				({ service, timestamp, level, message, stack, ...data }) => {
					if (!_.isEmpty(data)) {
						message += "\n" + JSON.stringify(data, null, 2);
					}
					return `${timestamp} ${level
						.toUpperCase()
						.padEnd(5, " ")} - ${message} ${
						stack ? "\n" + stack : ""
					}`;
				}
			),
			format.colorize({ all: true })
		),
		defaultMeta: {
			service: config.app.name
		},
		transports: [new transports.Console()]
	});

const toCustomKafkaLogLevel = (level) => {
	switch (level) {
		case logLevel.ERROR:
		case logLevel.NOTHING:
			return "error";
		case logLevel.WARN:
			return "warn";
		case logLevel.INFO:
			return "info";
		case logLevel.DEBUG:
			return "debug";
	}
};

const CustomKafkaLogCreator = (logLevel) => {
	const logger = customLogger(toCustomKafkaLogLevel(logLevel));

	return ({ namespace, level, label, log }) => {
		const { message, ...extra } = log;
		logger.log({
			level: toCustomKafkaLogLevel(level),
			message,
			extra
		});
	};
};

const logger = customLogger();

export default logger;
export { CustomKafkaLogCreator };
