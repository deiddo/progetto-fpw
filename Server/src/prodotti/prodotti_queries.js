// Recupero prodotto/i
const getListaProdotti = "SELECT * FROM prodotti ORDER BY id";
const getProdottoById = "SELECT * FROM prodotti WHERE id = $1";

// Aggiunta prodotto
const addProdotto = "INSERT INTO prodotti (nome, descrizione, immagine, utente) VALUES ($1, $2, $3, $4)";

// Cancellazione prodotto
const deleteProdotto = "DELETE FROM prodotti WHERE id = $1";

// Aggiornamento prodotto
const updateProdotto = "UPDATE prodotti SET nome = $2, descrizione = $3, immagine = $4 WHERE id = $1";

module.exports = {
	getListaProdotti,
	getProdottoById,
	addProdotto,
	deleteProdotto,
	updateProdotto,
};