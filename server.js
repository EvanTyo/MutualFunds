const express = require('express')
const cors = require('cors');
const app = express()

// port
const port = process.env.PORT || 4000

// middlewares
app.use(express.json())
app.use(cors());

const routers = require('./routes/mutualFundsRouter.js')
app.use('/mutual_funds', routers)

app.get('/', (req, res) => {
    res.send('Mutual Funds')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})