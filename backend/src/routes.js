const express = require('express');
const DevControler = require('./controllers/DevController');
const LikeControler = require('./controllers/LikeController');
const DislikeControler = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs',DevControler.index);
routes.post('/devs',DevControler.store);
routes.post('/devs/:devId/likes',LikeControler.store);
routes.post('/devs/:devId/dislikes',DislikeControler.store);



module.exports = routes;
