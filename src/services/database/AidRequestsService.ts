import { BaseModelService } from "./BaseModelService";
import AidRequests from "../../models/AidRequests";
import { aidService } from "./AidService";
import logger from "../../utils/logger";
import Aid from "../../models/Aid";
import { Sequelize } from "sequelize";

class AidRequestsService extends BaseModelService {
	constructor() {
		super({
			modelClass: AidRequests
		});
	}

	createAid = async (data) => {
		const aidModel = await aidService.createAidDetail(data);
		logger.info(`Aid Detail with id [${aidModel.id}] created`, aidModel);
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
			aid_id: aidModel.id
		};

		const aidRequestsModel = await this.create(modelData);
		logger.info(
			`Aid with id [${aidRequestsModel.id}] created`,
			aidRequestsModel
		);
		return aidRequestsModel;
	};

	findAllAids = async () => {
		return await this.findAll({
			include: Aid,
			order: [["created_at", "DESC"]]
		});
	};
}

export const aidRequestsService = new AidRequestsService();
