import express from "express";
import logger from "../utils/logger";
import _ from "lodash";
import { aidService } from "../services/database/AidService";

const router = express.Router();

router.use(express.json());

router.get("/aid", async (req, res) => {
	try {
		const allAidsModel = await aidService.findAllAids();
		res.status(200).json({
			status: 200,
			message: "Successfully queried",
			payload: allAidsModel
		});
	} catch (e) {
		logger.warn("Request Error /aid:", e);
		res.status(400).json({
			status: 400,
			message: e.message
		});
	}
});
router.get("/aid/:aid_id", async (req, res) => {
	logger.info(req.params.aid_id);
	try {
		if (!req.params.aid_id) throw new Error("Invalid aid id");
		const aidModel = await aidService.findAid(req.params.aid_id);
		res.status(200).json({
			status: 200,
			message: "Successful query",
			payload: aidModel
		});
	} catch (e) {
		logger.warn("Request Error /aid/create:", e);
		res.status(400).json({
			status: 400,
			message: e.message
		});
	}
});
router.post("/aid/create", async (req, res) => {
	try {
		if (_.isEmpty(req.body)) throw new Error("Invalid input data");
		// Need to validate form for further check, not just check if null

		await aidService.createAid(req.body);
		res.status(200).json({
			status: 200,
			message: "Successfully created"
		});
	} catch (e) {
		logger.warn("Request Error /aid/create:", e);
		res.status(400).json({
			status: 400,
			message: e.message
		});
	}
});
router.post("/aid/:aid_id", async (req, res) => {
	res.send("Edit Aid Post Route");
});

export default router;
