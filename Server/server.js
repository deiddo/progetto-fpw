const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(express.json());

const prodottiRoutes = require('./src/prodotti/prodotti_routes');
const utentiRoutes = require('./src/utenti/utenti_routes');

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 300000, secure: false }
}));

app.use('/prodotti', prodottiRoutes);
app.use('/utenti', utentiRoutes);

app.listen(port, () => console.log(`Il server è attivo sulla porta ${port}.`));