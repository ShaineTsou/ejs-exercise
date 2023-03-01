const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

const user = {
  firstName: 'John',
  lastName: 'Doe',
  admin: false,
}

const supplies = {
  admin: ['apple', 'banana', 'coconut', 'durian', 'eggplant'],
  regular: ['toast'],
}

const posts = [
  { title: 'Title 1', body: 'body 1' },
  { title: 'Title 2', body: 'body 2' },
  { title: 'Title 3', body: 'body 3' },
  { title: 'Title 4', body: 'body 4' },
]

app.get('/', (req, res) => {
  res.render('pages/index', { user, supplies, title: "Home page" })
})

app.get('/articles', (req, res) => {
  res.render('pages/articles', { articles: posts, title: "Articles" })
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})