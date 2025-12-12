const { Router } = require('express');
const entryController = require('../controllers/entries')

const entryRouter = Router();

entryRouter.get("/", entryController.index);
entryRouter.get("/:name", entryController.show);
entryRouter.post("/", entryController.create);
entryRouter.patch("/:name", entryController.update);
entryRouter.delete("/:name", entryController.destroy);

module.exports = entryRouter;