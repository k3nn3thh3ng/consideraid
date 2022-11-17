import { BaseModelService } from "./BaseModelService";
import Aid from "../../models/Aid";
import { aidDetailService } from "./AidStatusService";
import logger from "../../utils/logger";
import AidStatus from "../../models/AidStatus";
import { Sequelize } from "sequelize";

class AidService extends BaseModelService {
	constructor() {
		super({
			modelClass: Aid
		});
	}

	createAid = async (data) => {
		const { items } = data;
		const modelData = {
			food_rations: items.foodRations || false,
			halal_food_rations: items.halalFoodRations || false,
			formula_milk: items.formulaMilk || false,
			baby_diaper: items.babyDiaper || false,
			adult_diaper: items.adultDiaper || false,
			pro_bono_tuition: items.proBonoTuition || false,
			pro_bono_mentorship: items.proBonoMentorship || false,
			rehoming_of_pets: items.rehomingOfPets || false,
			school_textbooks: items.schoolTextbooks || false,
			repainting_of_house: items.repaintingOfHouse || false,
			cleaning_of_house: items.cleaningOfHouse || false,
			description: data.description || "Default description",
			name: data.name || "Default name",
			area: data.area || "Default area",
			contact_number: data.contactNumber || "Default contact number"
		};

		const aidModel = await this.create(modelData);
		logger.info(`Aid with id [${aidModel.id}] created`, aidModel);

		const aidDetailModel = await aidDetailService.createAidStatus(
			data,
			aidModel.id
		);
		logger.info(
			`Aid Detail with id [${aidDetailModel.id}] created`,
			aidDetailModel
		);

		return aidDetailModel;
	};

	findAllAids = async () => {
		return await this.findAll({
			include: AidStatus,
			order: [["created_at", "DESC"]]
		});
	};

	findAid = async (aidId) => {
		return await this.findByPk(aidId, {
			include: AidStatus
		});
	};
}

export const aidService = new AidService();
