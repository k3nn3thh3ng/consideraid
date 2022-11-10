import Aid from "./Aid";
import AidDetail from "./AidDetail";

export default () => {
	AidDetail.belongsTo(Aid);
	Aid.hasOne(AidDetail, {
		foreignKey: {
			name: "aid_id",
			allowNull: false
		}
	});
};
