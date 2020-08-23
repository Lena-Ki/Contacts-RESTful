const express = require('express')
const path = require('path')
const app = express()

const CONTACTS = [
  {id: 1, name: 'Lena', value: '+7-903-313-02-70', marked: false}
]

// GET
app.get('/api/contacts', (req, res) => {
  res.status(200).json(CONTACTS)
})

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => console.log('Starting...'))