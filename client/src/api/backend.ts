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

export interface AidsPayload {
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
	area: string;
	created_at: string;
	modified_at: string;
	description: string;
	name: string;
	contact_number: string;
	aid_status: {
		id: number;
		status: number;
		created_at: string;
		modified_at: string;
	};
}

export const getAllAids = async (): Promise<
	StandardResponse<AidsPayload[]>
> => {
	const response = await backendApi.get("/aid");
	return response.data;
};

export const getAid = async (
	aidId: string
): Promise<StandardResponse<AidsPayload>> => {
	const response = await backendApi.get(`/aid/${aidId}`);
	return response.data;
};
