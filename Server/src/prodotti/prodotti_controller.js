const { errorMessages } = require('vue/compiler-sfc');
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

	if(req.body == null) {
		res.status(400).json({ message: '[400] Richiesta non valida.' });
		return;
	}

	const { nome, descrizione, prezzo, ritrovamento, grado_stranezza, immagine, utente } = req.body;
	pool.query(queries.addProdotto, [ nome, descrizione, prezzo, ritrovamento, grado_stranezza, immagine, utente ], (error) => {
		if(error) throw error;
		res.status(201).json({ message: '[201] Prodotto aggiunto con successo.' });
	});
};


const deleteProdotto = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.deleteProdotto, [id], (error, results) => {
		
		if(error) throw error;
		
		if(results.rowCount === 0) {
			res.status(404).json({ message: '[404] Prodotto non trovato.' });
		}

		else {
			res.status(200).json({ message: '[200] Prodotto eliminato con successo.' });
		}
	});
};



module.exports = {
	getListaProdotti,
	getProdottoById,
	addProdotto,
	deleteProdotto,
};