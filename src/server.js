import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
//pug settings

app.use('/public', express.static(__dirname + '/public'));
//user가 /public으로 가게 되면 __dirname + /'public' 폴더를 보여주게 한다.

app.get('/', (req, res) => res.render('home'));
//Routing Setting

const handleListen = () => console.log('Listening on http://localhost:3000');
app.listen(3000, handleListen);
