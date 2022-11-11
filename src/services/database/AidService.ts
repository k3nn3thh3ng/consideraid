import { BaseModelService } from "./BaseModelService";
import Aid from "../../models/Aid";

class AidService extends BaseModelService {
	constructor() {
		super({
			modelClass: Aid
		});
	}
}

export const aidService = new AidService();
