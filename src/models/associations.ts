import AidRequests from "./AidRequests";
import Aid from "./Aid";

export default () => {
	Aid.hasOne(AidRequests, {
		foreignKey: {
			name: "aid_id",
			allowNull: false
		}
	});
	AidRequests.belongsTo(Aid, {
		foreignKey: {
			name: "aid_id",
			allowNull: false
		}
	});
};
