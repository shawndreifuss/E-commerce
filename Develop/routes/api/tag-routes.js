const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags, include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    if (!tagData) {
      res.status(200).json({message: 'No tags found'});
      return;
    }
    res.json(tagData);   
  } catch (err) {
    res.status(500).json(err);
  }
});


// find a single tag by its `id`, include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tagData) {
      res.status(200).json({message: 'Tag not found'});
      return;
    };
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tagName
    });
    res.status(200).json(tagData);
    console.log('Tag created!');
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update({
      tag_name: req.body.tagName
    },
    {
      where: {
        id: req.params.id
      }
    });
    // sends message if user requests to update tag that does not exist
    const tagDataId = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tagDataId) {
      res.status(200).json({message: 'Tag not found'});
      return;
    };
    res.status(200).json(tagData);
    console.log('Tag updated!');  
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(200).json({message: 'Tag not found'});
      return;
    }
    res.status(200).json(tagData);
    console.log('Tag deleted!');    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
