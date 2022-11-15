const express = require('express')
var router = express()
var bodyParser = require('body-parser');
const empController = require('../controller/emp')

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post('/create', empController.create)
router.post('/add_user', empController.addUser)
router.get('/view', empController.view)
    // router.patch('/:id', empController.update)
router.post('/delete', empController.remove)

module.exports = router