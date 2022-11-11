require("dotenv").config();
import express from "express";
import bodyparser from "body-parser";
import path from "path";
import cors from "cors";
import { init as init_database } from "./models/context";
import AidRoutes from "./routes/aid";
import config from "../config";

const whitelist = [config.api.development_front_end];

export default async () => {
	const app = express();
	const port = process.env.PORT || 3000;
	const corsOption = {
		origin: whitelist
	};

	await init_database();

	app.use(bodyparser.urlencoded({ extended: true }));
	app.use(cors(corsOption));
	app.use(express.json());
	app.use(express.static(path.resolve(__dirname, "..", "build")));

	app.use("/api", AidRoutes);
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
	});

	app.listen(port, function () {
		console.log(`server is listening on port: ${port}`);
	});
};
