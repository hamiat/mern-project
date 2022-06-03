const asyncHandler = require('express-async-handler')

//@desc  Get Cards
//@route GET /api/cards
//access Private
const getCards = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please ass a text field.')
    }

    res.status(200).json({message: 'Get Card'})
})

//@desc  Set Cards
//@route SET /api/cards
//access Private
const setCards = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Set Card'})
})

//@desc  Update Cards
//@route PUT /api/cards
//access Private
const updateCard =  asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Card ${req.params.id}`})
})

//@desc  Delete Cards
//@route DELETE /api/cards
//access Private
const deleteCard = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Card ${req.params.id}`})
})


module.exports = {
    getCards, setCards, updateCard, deleteCard
}