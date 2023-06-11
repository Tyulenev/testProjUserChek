const express = require('express')
const checkUser = require('./moduleReadUsers')

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/user/:username', (req, res) => {
    
    checkUser (req.params.username, (result) => {
        let userData = { username: req.params.username 
        , chekResult: result}
        res.render('user', userData)
    })
})

app.post('/check-user', (req, res) => {
    let username = req.body.username
    if (username == "")
        return res.redirect('/')
    else
        return res.redirect('/user/' + username)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})