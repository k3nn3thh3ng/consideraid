import { DataTypes, Model, Sequelize } from "sequelize";
import { modelCommonOptions } from "./common";

export default class Aid extends Model {
	static initModel(sequelize: Sequelize) {
		Aid.init(
			{
				food_rations: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				},
				halal_food_rations: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				},
				formula_milk: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				},
				baby_diaper: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				},
				adul_diaper: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				},
				pro_bono_tuition: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				},
				pro_bono_mentorship: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				},
				rehoming_of_pets: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				},
				school_textbooks: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				},
				repainting_of_house: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				},
				cleaning_of_house: {
					type: DataTypes.BOOLEAN(),
					allowNull: false
				}
			},
			{
				sequelize,
				modelName: "aid",
				...modelCommonOptions()
			}
		);
	}
}
