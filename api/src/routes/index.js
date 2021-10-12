const { Router } = require('express');
const CategoriesRouter = require('./categories')

const router = Router();

router.use('/categories', CategoriesRouter)

module.exports = router;
