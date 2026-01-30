
const pool = require('../../db');
const queries = require('./utenti_queries');


const getListaUtenti = (req, res) => {
	pool.query(queries.getListaUtenti, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};


const getUtenteByUsername = (req, res) => {
	const username = req.params.username;
	pool.query(queries.getUtenteByUsername, [username], (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};


const addUtente = (req, res) => {

	if(req.body == null) {
		res.status(400).json({ message: '[400] Richiesta non valida.' });
		return;
	}

	const { username, password, nome, cognome, email, citta, eta, sesso } = req.body;
	pool.query(queries.getUtenteByUsername, [username], (error, results) => {
		if(error) throw error;

		if(results.rows.length > 0) {
			res.status(400).json({ message: '[400] Nome utente non disponibile.' });
		}

		else {
			pool.query(queries.addUtente, [username, password, nome, cognome, email, citta, eta, sesso], (error) => {
				if(error) throw error;
				res.status(201).json({ message: '[201] Utente aggiunto con successo.' });
			});
		}
	},);
};


const deleteUtente = (req, res) => {
	const username = req.params.username;
	pool.query(queries.deleteUtente, [username], (error, results) => {
		
		if(error) throw error;
		
		if(results.rowCount === 0) {
			res.status(404).json({ message: '[404] Utente non trovato.' });
		}

		else {
			res.status(200).json({ message:'[200] Utente eliminato con successo.' });
		}
	});
};


const aggiornaPassword = (req, res) => {

	if(req.body == null) {
		res.status(400).json({ message: '[400] Richiesta non valida.' });
		return;
	}

	const username = req.params.username;
	const newPassword = req.body.newPassword;
	pool.query(queries.getUtenteByUsername, [username], (error, results) => {
		if(error) throw error;

		if(results.rows.length == 0) {
			res.status(404).json({ message: '[404] Utente non trovato.' });
		}

		else {
			pool.query(queries.aggiornaPassword, [username, newPassword], (error) => {
				if(error) throw error;
				res.status(200).json({ message: '[200] Password modificata con successo.' });
			});
		}
	},);
};


module.exports = {
	getListaUtenti,
	getUtenteByUsername,
	addUtente,
	deleteUtente,
	aggiornaPassword,
};