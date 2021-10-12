const { Router } = require('express');
const router = Router();
const Category = require('../models/Category')

router.get('/', async (req, res, next) => { // viene de /categories
   try {
    const categories = await Category.find()
      res.json(categories)
   } catch (error) {
      next(error)
   }
})


module.exports = router;
