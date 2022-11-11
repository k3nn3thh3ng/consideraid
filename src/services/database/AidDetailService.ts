import { BaseModelService } from "./BaseModelService"
import AidDetail from "../../models/AidDetail";

class AidDetailService extends BaseModelService {
    constructor() {
        super({
            modelClass: AidDetail
        });
    }
}

export const aidDetailService = new AidDetailService()