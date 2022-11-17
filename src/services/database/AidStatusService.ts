import { BaseModelService } from "./BaseModelService";
import AidStatus from "../../models/AidStatus";

class AidStatusService extends BaseModelService {
	constructor() {
		super({
			modelClass: AidStatus
		});
	}

	createAidStatus = async (_, aidId) => {
		if (!aidId)
			throw new Error("Aid must be created before adding aid_status");
		const modelData = {
			aid_id: aidId
		};
		return await this.create(modelData);
	};
}

export const aidDetailService = new AidStatusService();
