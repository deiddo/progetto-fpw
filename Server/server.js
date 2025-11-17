const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const prodottiRoutes = require('./src/prodotti/prodotti_routes');

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.use('/prodotti', prodottiRoutes);

app.listen(port, () => console.log(`app listening on port ${port}!`));