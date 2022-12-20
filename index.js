require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Recipe = require('./models/recipe')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/recipes', (req, res) => {
    Recipe.find({}).then(recipes => {
        res.json(recipes)
    })
})

app.get('/recipes/:id', (request, response, next) => {
    Recipe.findById(request.params.id)
        .then(recipe => {
            if (recipe) {
                response.json(recipe)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.post('/recipes', (request, response) => {
    const body = request.body

    if (!body.title) {
        return response.status(400).json({
            error: 'title missing'
        })
    }

    const recipe = new Recipe({
        title: body.title,
        ingredients: body.ingredients,
        image: body.image,
        season: body.season
    })

    recipe.save().then(savedRecipe => {
        response.json(savedRecipe)
    })
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})