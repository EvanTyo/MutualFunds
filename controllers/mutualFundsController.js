// require the db created in the index file
const db = require('../models/index')

// get the customers model
const MutualFund = db.MutualFunds

const addMutualFund = async (req, res) => {
    let input_data = {
        ticker: req.body.ticker,
        name: req.body.name,
        assetClass: req.body.assetClass,
        risk: req.body.risk,
        expenseRatio: req.body.expenseRatio,
        secYield: req.body.secYield,
        ytd: req.body.ytd,
        oneYr: req.body.oneYr,
        threeYr: req.body.threeYr,
        fiveYr: req.body.fiveYr,
        tenYr: req.body.tenYr,
        sinceInception: req.body.sinceInception,
        initialInvestment: req.body.investmentMinimum,
        price: req.body.price,
        changePrice: req.body.changePrice,
        changePricePercent: req.body.changePricePercent
        }
        // using the builtin 'create' function on Customer Model
        const mutualFund = await MutualFund.create(input_data)
        
        // send a 200 response with the created entry
        res.status(200).send(mutualFund)
}

const getAllMutualFunds = async (req, res) => {

    // using the builtin 'findOne' function on Customer Model
    let mutualFunds = await MutualFund.findAll({})

    mutualFunds.sort((a, b) => parseInt(a.id) - parseInt(b.id))

    res.status(200).send(mutualFunds)
}

const getOneMutualFund = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on Customer Model
    let mutualFunds = await MutualFund.findOne({where: {id: id}})
    res.status(200).send(mutualFunds)
}

const updateMutualFund = async (req, res) => {
    let id = req.params.id

    // using the builtin 'update' function on Customer Model
    const mutualFund = await MutualFund.update(req.body, { where: {id: id}})
    res.status(200).send(mutualFund)
}

const deleteMutualFund = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Customer Model
    await MutualFund.destroy({where :{id: id}})
    res.status(200).send(`Mutual fund with id: ${id} is deleted`)
}

// export all the controller functions
module.exports = {
    addMutualFund,
    getAllMutualFunds,
    getOneMutualFund,
    updateMutualFund,
    deleteMutualFund
}