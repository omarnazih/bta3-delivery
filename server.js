const express = require('express')
const app = express()
const port = 3000

// To use a view engine
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  console.log("Working!!") 
  res.render("index", { text: "Omar"})
});

const userRouter = require('./routes/users')
const loginRouter = require('./routes/login')

app.use('/users', userRouter)
app.use('/login', loginRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))