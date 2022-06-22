const express = require('express');
const router = express.Router();
const postsController = require('./controller/posts');

router.get ('/', postsController.index);
router.get ('/:1d', postsController.show);
router.post ('/', postsController.create);