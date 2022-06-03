const express = require('express')
const router = express.Router()

//get requests
router.get('/', (req, res) => {
    res.status(200).json({message: 'Get Board'})
})

//post requests
router.post('/', (req, res) => {
    res.status(200).json({message: 'Set Board'})
})

//edit requests
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update Board ${req.params.id}`})
})

//delete requests
router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete Board ${req.params.id}`})
})

module.exports = router