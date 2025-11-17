const pool = require('../../db');
const queries = require('./prodotti_queries');

const getListaProdotti = (req, res) => {
	pool.query(queries.getListaProdotti, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};


const getProdottoById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.getProdottoById, [id], (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};


const addProdotto = (req, res) => {
	const{ id, nome, descrizione, immagine} = req.body;
	pool.query(queries.getProdottoById, [id], (error, results) =>{
		if(error) throw error;

		if(results.rows.length > 0) {
			res.status(400).send('Prodotto già presente nel DB.');
		}

		else {
			pool.query(queries.addProdotto, [id, nome, descrizione, immagine], (error) =>{
				if(error) throw error;
				res.status(201).send('Prodotto aggiunto con successo');
			});
		}
	},);
};


module.exports = {
	getListaProdotti,
	getProdottoById,
	addProdotto,
};