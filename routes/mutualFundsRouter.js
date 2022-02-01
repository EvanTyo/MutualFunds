// import the controller functions
const mutualFundsController = require('../controllers/mutualFundsController.js')

// create a Router object from express
const router = require('express').Router()

// add a new customer to the table
router.post('/', mutualFundsController.addMutualFund)

// access all the customers in the table
router.get('/', mutualFundsController.getAllMutualFunds)

// access one customer by id
router.get('/:id', mutualFundsController.getOneMutualFund)

// modify one customer by id
router.put('/:id', mutualFundsController.updateMutualFund)

// delete one customer by id
router.delete('/:id', mutualFundsController.deleteMutualFund)

module.exports = router