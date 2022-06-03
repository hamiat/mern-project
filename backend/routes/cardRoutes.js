const express = require('express')
const router = express.Router()
const { getCards, setCards, updateCard, deleteCard } = require('../controllers/cardController')

//chaining get and post since same route /
router.route('/').get(getCards).post(setCards)

//same with put and delete
router.route('/:id').put(updateCard).delete(deleteCard)


module.exports = router