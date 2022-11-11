import Aid from "./Aid";
import AidDetail from "./AidDetail";

export default () => {
	AidDetail.hasOne(Aid, {
		foreignKey: {
			name: "aid_detail_id",
			allowNull: false
		}
	});
};
