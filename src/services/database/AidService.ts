import { BaseModelService } from "./BaseModelService";
import Aid from "../../models/Aid";

class AidService extends BaseModelService {
	constructor() {
		super({
			modelClass: Aid
		});
	}

	createAidDetail = async (data) => {
		const modelData = {
			description: data.description || "Default description",
			name: data.name || "Default name",
			area: data.area || "Default area",
			contact_number: data.contactNumber || "Default contact number"
		};
		return await this.create(modelData);
	};
}

export const aidService = new AidService();
