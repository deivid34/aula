const {Router} = require('express')

const{createCart,getlistofcart, createusercart} = require('./controllers')

const routes = Router()

routes.post('/cart', createCart) 

routes.get('/cart', getlistofcart) 

routes.post('/cart/user-cart', createusercart) 

    module.exports = routes
    