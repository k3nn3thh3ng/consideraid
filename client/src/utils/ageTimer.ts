import moment from "moment";

export const ageTimer = (date: string, update: number) => {
	return moment(date).fromNow();
};
