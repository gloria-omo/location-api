const express = require('express')
const router = express.Router()

const {home, createUser} = require('../controller/controller')


router.get('/home', home)
router.post('/create', createUser)

module.exports = router