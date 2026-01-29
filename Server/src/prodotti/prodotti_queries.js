// Recupero prodotto/i
const getListaProdotti = "SELECT * FROM prodotti ORDER BY id";
const getProdottoById = "SELECT * FROM prodotti WHERE id = $1";

// Aggiunta prodotto
const addProdotto = "INSERT INTO prodotti (nome, descrizione, ritrovamento, grado_stranezza, immagine, utente) VALUES ($1, $2, $3, $4, $5, $6)";

// Cancellazione prodotto
const deleteProdotto = "DELETE FROM prodotti WHERE id = $1";

// Aggiornamento prodotto
const updateProdotto = "UPDATE prodotti SET nome = $2, descrizione = $3, immagine = $4, ritrovamento = $5, grado_stranezza = $6 WHERE id = $1";

module.exports = {
	getListaProdotti,
	getProdottoById,
	addProdotto,
	deleteProdotto,
	updateProdotto,
};