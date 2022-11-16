import axios from "axios";
import config from "../config";

export const backendApi = axios.create({
	baseURL: `${config.api.backend}/api`
});

interface StandardResponse<t> {
	status: number;
	message: string;
	payload?: t;
}

interface AllAidsPayload {
	id: string;
	food_rations: boolean;
	halal_food_rations: boolean;
	formula_milk: boolean;
	baby_diaper: boolean;
	adult_diaper: boolean;
	pro_bono_tuition: boolean;
	pro_bono_mentorship: boolean;
	rehoming_of_pets: boolean;
	school_textbooks: boolean;
	repainting_of_house: boolean;
	cleaning_of_house: boolean;
	created_at: string;
	modified_at: string;
	aid_id: 2;
	aid: {
		id: number;
		description: string;
		name: string;
		contact_number: string;
		created_at: string;
		modified_at: string;
		area: string;
	};
}

export const getAllAids = async (): Promise<
	StandardResponse<AllAidsPayload[]>
> => {
	const response = await backendApi.get("/aid");
	return response.data;
};
