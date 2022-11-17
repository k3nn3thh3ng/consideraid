import Aid from "./Aid";
import AidStatus from "./AidStatus";

export default () => {
	Aid.hasOne(AidStatus, {
		foreignKey: {
			name: "aid_id",
			allowNull: false
		}
	});
};
