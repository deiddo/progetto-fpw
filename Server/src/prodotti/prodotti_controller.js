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
		res.status(400).send('[400] Richiesta non valida.');
		return;
	}

	const { id, nome, descrizione, immagine } = req.body;
	pool.query(queries.getProdottoById, [id], (error, results) => {
		if(error) throw error;

		if(results.rows.length > 0) {
			res.status(400).send('[400] Prodotto già presente nel DB.');
		}

		else {
			pool.query(queries.addProdotto, [id, nome, descrizione, immagine], (error) => {
				if(error) throw error;
				res.status(201).send('[201] Prodotto aggiunto con successo.');
			});
		}
	},);
};


const deleteProdotto = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.deleteProdotto, [id], (error, results) => {
		
		if(error) throw error;
		
		if(results.rowCount === 0) {
			res.status(404).send('[404] Prodotto non trovato.');
		}

		else {
			res.status(200).send('[200] Prodotto eliminato con successo.');
		}
	});
};


const updateProdotto = (req, res) => {

	if(req.body == null) {
		res.status(400).send('[400] Richiesta non valida.');
		return;
	}

	const id = parseInt(req.params.id);
	const { nome, descrizione, immagine } = req.body;

	pool.query(queries.getProdottoById, [id], (error, results) => {
		if(error) throw error;

		if(results.rows.length === 0) {
			res.status(404).send('[404] Prodotto non trovato.');
		}

		else {
			pool.query(queries.updateProdotto, [id, nome, descrizione, immagine], (error) => {
				if(error) throw error;
				res.status(200).send('[200] Prodotto aggiornato con successo.');
			});
		}
	},);
};



module.exports = {
	getListaProdotti,
	getProdottoById,
	addProdotto,
	deleteProdotto,
	updateProdotto,
};