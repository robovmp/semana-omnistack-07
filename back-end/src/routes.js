const { Router } = require('express');
const express = require( 'express' );
const multer = require( 'multer' );

const routes = new express.Router();

const uploadConfig = require( './config/multer' );


const upload = multer(uploadConfig);

const PostController = require( './controllers/PostController' );

const LikeController = require( './controllers/LikeController' );

routes.get( '/posts', PostController.index );
routes.post( '/posts', upload.single('image'), PostController.store );


routes.post( '/posts/:id/like', LikeController.store );


module.exports= routes;