//@desc  Get Cards
//@route GET /api/cards
//access Private
const getCards = (req, res) => {
    console.log(req.body)

    res.status(200).json({message: 'Get Card'})
}

//@desc  Set Cards
//@route SET /api/cards
//access Private
const setCards = (req, res) => {
    res.status(200).json({message: 'Set Card'})
}

//@desc  Update Cards
//@route PUT /api/cards
//access Private
const updateCard =  (req, res) => {
    res.status(200).json({message: `Update Card ${req.params.id}`})
}

//@desc  Delete Cards
//@route DELETE /api/cards
//access Private
const deleteCard = (req, res) => {
    res.status(200).json({message: `Delete Card ${req.params.id}`})
}


module.exports = {
    getCards, setCards, updateCard, deleteCard
}