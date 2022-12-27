import express from 'express';

const app = express();

//pug settings
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
//pug settings

app.get('/', (req, res) => res.render('home'));
//Routing Setting

const handleListen = () => console.log('Listening on http://localhost:3000');
app.listen(3000, handleListen);
