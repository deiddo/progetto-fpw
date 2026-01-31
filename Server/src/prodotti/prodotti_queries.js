// Recupero prodotto/i
const getListaProdotti = "SELECT * FROM prodotti ORDER BY id";
const getProdottoById = "SELECT * FROM prodotti WHERE id = $1";

// Aggiunta prodotto
const addProdotto = "INSERT INTO prodotti (nome, descrizione, prezzo, ritrovamento, grado_stranezza, immagine, utente) VALUES ($1, $2, $3, $4, $5, $6, $7)";

// Cancellazione prodotto
const deleteProdotto = "DELETE FROM prodotti WHERE id = $1";

module.exports = {
	getListaProdotti,
	getProdottoById,
	addProdotto,
	deleteProdotto,
};