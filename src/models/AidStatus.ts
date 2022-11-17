import { DataTypes, Model, Sequelize, TINYINT } from "sequelize";
import { modelCommonOptions } from "./common";

export default class AidStatus extends Model {
	static initModel(sequelize: Sequelize) {
		AidStatus.init(
			{
				status: {
					type: DataTypes.TINYINT(),
					defaultValue: 1,
					comment: "0:Pending // 1:Rejected // 2:Open // 3:Close"
				}
			},
			{
				sequelize,
				modelName: "aid_status",
				...modelCommonOptions()
			}
		);
	}
}
