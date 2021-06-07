const Express = require('express')
const Handle = require('express-handlebars')
const BodyParser = require('body-parser')

const App = Express()
App.use(Express.json())

App.engine("handlebars", Handle({
    defaultLayout: 'main'
}))

App.set('view engine', 'handlebars')

App.use(BodyParser.urlencoded({ extended: false }))
App.use(BodyParser.json())


App.get('/', (req, res) => {
    res.render('index')
})


App.listen(3000, err => console.log(err ? err : 'run'))