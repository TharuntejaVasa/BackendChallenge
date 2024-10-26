const express = require('express')

const app = express()

const port = 3000

app.use(express.json())

app.post('/api/calculate-total', (req, res) => {
  const products = req.body.products

  if (!Array.isArray(products)) {
    return res
      .status(400)
      .json({error: 'Invalid input. Expected an array of products.'})
  }

  const totalValue = products.reduce((total, product) => {
    const {price, quantity} = product

    return total + price * quantity
  }, 0)

  res.json({totalValue})
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
