const Category = require('../models/Category')

const precargaDB = async () => {

  const category1 = new Category({
    id: 1,
    name: 'Books'
  })
  category1.save()

  const category2 = new Category({
    id: 2,
    name: "Electronics"
  })
  category2.save()

  const category3 = new Category({
    id: 3,
    name: "Computers"
  })
  category3.save()
}


module.exports = {precargaDB}