const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories be sure to include its associated Products
router.get('/', async (req, res) => {
   try {
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find one category by its `id` value
  // get request from /api/categories/:id
router.get('/:id', async (req, res) => {
  try { 
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    })
    res.status(200).json(categoryData);
  }  catch (err) {
    res.status(500).json(err);
  }
});
// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.categoryName
    })
    res.status(200).json(categoryData);
    console.log('New category added!')
  } catch (err) {
    res.status(500).json(err);
  };
});
// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update({
      category_name: req.body.categoryName
    },
    {
      where: {
        id: req.params.id
      }
    });
    // sends message if user requests to update ID that does not exist
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryById) {
      res.status(200).json({message: 'No category found'});
      return;
    }
    res.status(200).json(categoryData);
    console.log("Category updated!");
  } catch (err) {
    res.status(500).json(err);
  };
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categorydata = await Category.destroy(
      {
        where: {
          id: req.params.id,
        }
      });
      if (!categorydata) {
        res.status(200).json({message: 'No categories found'});
        return;
      };
      res.status(200).json(categorydata);
      console.log('Category deleted!');
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
