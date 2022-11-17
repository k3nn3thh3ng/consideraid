export const getProperty = <T, K extends keyof T>(obj: T, key: K): string => {
	return typeof obj[key];
};
