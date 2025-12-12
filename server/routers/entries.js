const { Router } = require('express');
const entryController = require('../controllers/entries')

const entryRouter = Router();

// More specific routes must come first
entryRouter.get("/recent", entryController.getRecent);
entryRouter.get("/date/:date", entryController.getByDate);
entryRouter.get("/category/:category", entryController.getByCategory);

// General routes
entryRouter.get("/", entryController.index);
entryRouter.get("/:name", entryController.show);
entryRouter.post("/", entryController.create);
entryRouter.patch("/:name", entryController.update);
entryRouter.delete("/:name", entryController.destroy);

module.exports = entryRouter;