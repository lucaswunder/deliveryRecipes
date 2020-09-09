const express = require('express');
const handle = require('express-async-handler');

const routes = express.Router()
const container = require('./App/container');

/** Middlewares */
const validatorMiddleware = require('./App/Middlewares/Validator');

/** Schemas */
const recipeSchema = require('./App/Schemas/RecipeSchema');

/** Controllers */
const recipeController = container.resolve('recipeController');

/** Routes */

/** Recipe  */
routes.get('/recipes', validatorMiddleware(recipeSchema), handle(recipeController.index))

/**
 * Not Found
 */
routes.use('/*', (req, res) => {
  res.status(404).json({ error: 'Not found' })
})

module.exports = routes
