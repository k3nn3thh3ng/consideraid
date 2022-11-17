import logger from "../../utils/logger";

export class BaseModelService {
	_modelClass;

	constructor({ modelClass }) {
		this._modelClass = modelClass;
	}

	async upsert(modelData, options) {
		const [model, isNewlyCreated] = await this._modelClass.upsert(
			modelData,
			options
		);
		logger.info(
			`${isNewlyCreated ? "Created" : "Updated"} ${
				this._modelClass.name
			} [${model.id}]`
		);
		return [model, isNewlyCreated];
	}

	async truncate(options) {
		const model = await this._modelClass.destroy({
			...options,
			truncate: true
		});
		logger.warn(`Truncated ${this._modelClass.name}`);
		return model;
	}

	async bulkCreate(modelDataArray) {
		const models = await this._modelClass.bulkCreate(modelDataArray);
		logger.info(
			`Added ${models.length} records to ${this._modelClass.name}`
		);
		return models;
	}

	async create(modelData) {
		const model = await this._modelClass.create(modelData);
		logger.info(`Created ${this._modelClass.name} [${model.id}]`);
		return model;
	}

	async delete(id, options?) {
		const model = await this.findByPk(id, options);
		if (model) {
			await model.destroy();
			logger.info(`Deleted ${this._modelClass.name} [${id}]`);
		}
		return model;
	}

	async findByPk(id, options?) {
		const model = await this._modelClass.findByPk(id, options);
		if (model) {
			logger.debug(`Found ${this._modelClass.name} [${model.id}]`);
		} else {
			logger.warn(`Not found ${this._modelClass.name} with ID: ${id}`);
		}
		return model;
	}

	async findAll(options) {
		const models = await this._modelClass.findAll(options);
		if (options) {
			logger.debug(
				`Found ${models.length} ${this._modelClass.name} with options: `,
				options
			);
		} else {
			logger.debug(`Found ${models.length} ${this._modelClass.name}`);
		}
		return models;
	}

	async findOne(options) {
		const model = await this._modelClass.findOne(options);
		if (model) {
			logger.debug(
				`Found ${this._modelClass.name} [${model.id}] with options: `,
				options
			);
		} else {
			logger.debug(
				`Not found ${this._modelClass.name} with options: `,
				options
			);
		}
		return model;
	}

	async findOrCreate(options) {
		const [model, created] = await this._modelClass.findOrCreate(options);
		created
			? logger.debug(
					`Found ${this._modelClass.name} id:[${model.id}] with options: `,
					options
			  )
			: logger.debug(
					`Created ${this._modelClass.name} id:[${model.id}] with options: `,
					options
			  );
		return model;
	}

	async update(modelData, options) {
		const model = await this._modelClass.update(modelData, options);
		logger.info(
			`${model ? `Updated ${model}` : "Could not find"} record from ${
				this._modelClass.name
			}`
		);
		return model;
	}
}
