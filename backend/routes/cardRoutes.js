const express = require('express')
const router = express.Router()
const { getCards, setCards, updateCard, deleteCard } = require('../controllers/cardController')

//get requests
router.get('/', getCards)

//post requests
router.post('/', setCards)

//edit requests
router.put('/:id', updateCard)

//delete requests
router.delete('/:id', deleteCard)

module.exports = router