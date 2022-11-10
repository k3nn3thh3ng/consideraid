import { DataTypes, Model, Sequelize } from "sequelize";
import { modelCommonOptions } from "./common.js";

export default class AidDetail extends Model {
	static initModel(sequelize: Sequelize) {
		AidDetail.init(
			{
				description: {
					type: DataTypes.CHAR(64),
					allowNull: false
				},
				name: {
					type: DataTypes.CHAR(64),
					allowNull: false
				},
				area: {
					type: DataTypes.CHAR(64),
					allowNull: false
				},
				contact_number: {
					type: DataTypes.CHAR(64),
					allowNull: false
				}
			},
			{
				sequelize,
				modelName: "aid_detail",
				...modelCommonOptions()
			}
		);
	}
}
