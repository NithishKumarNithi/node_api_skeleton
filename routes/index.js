const express = require('express');
const routes = express.Router();
const controller = require('../controllers');

module.exports = routes;

routes.get('/', controller.home);
routes.get('/users/', controller.getUsers);
routes.post('/user/create', controller.create);
routes.post('/user/update/:id', controller.update);
routes.post('/user/delete/:id', controller.delete);

routes.post('/post/create',controller.post.create);
routes.get('/user/posts',controller.post.getPosts);


