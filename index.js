const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://h551654:551654@bp.q9ob5.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected.... '))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~~thanks안녕')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})