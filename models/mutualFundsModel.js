// this file stores the "mutualFund" model (model is table schema in sequelize lingo)

// inputs: sequelize instance and DT Class, returns: a MutualFunds Model object
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'customer' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "customers"
    const MutualFund = sequelize.define('mutualFund', {
        id: { // the id will be our primary key for accessing mutualFund data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        ticker: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        assetClass: {
            type: DataTypes.STRING,
            allowNull: true
        },
        risk: {
            type: DataTypes.STRING,
            allowNull: true
        },
        expenseRatio: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        secYield: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        ytd: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        oneYr: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        threeYr: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        fiveYr: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        tenYr: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        sinceInception: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        initialInvestment: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        changePrice: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        changePricePercent: {
            type: DataTypes.FLOAT,
            allowNull: true
        }
    })

    return MutualFund
}