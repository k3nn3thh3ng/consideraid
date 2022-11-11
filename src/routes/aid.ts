import express from "express";

const router = express.Router();

router.use(express.json());

router.get("/aid", async (req, res) => {
	res.send("All Aid Get Route");
});
router.get("/aid/:aid_id", async (req, res) => {
	res.send("Aid Get Route");
});
router.post("/aid/:aid_id", async (req, res) => {
	res.send("Aid Post Route");
});

export default router;
