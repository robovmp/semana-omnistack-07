require ( 'dotenv' ).config();

const express = require( 'express' );
const mongoose = require( 'mongoose' );
const path = require( 'path' )
const cors = require( 'cors' )

const app = express();

const server = require( 'http' ).Server( app );
const io = require( 'socket.io' )( server, {
    cors:{
        origin: "http://localhost:8080",
        credentials: true
    }
} );

app.use( ( req, res, next )=>{
    req.io = io;

    next();
} )

mongoose.connect( process.env.CONECT,{
    useNewUrlParser: true,    
}).then(()=>{
    console.log('Conectado ao MongoDB')
    server.listen( 3333 );
})
.catch( (e)=> console.log(e) );

app.use( cors() );
 
app.use( '/files', express.static( path.resolve( __dirname, '..', 'uploads', 'resized' ) ) )
app.use( require( './routes' ) )

app.use((error, req, res, next) => {
    console.log('error middleware');
    console.log(error);
    res.sendStatus(500);
});




