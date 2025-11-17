const getListaProdotti = "SELECT * FROM prodotti";
const getProdottoById = "SELECT * FROM prodotti WHERE id = $1";

const addProdotto = "INSERT INTO prodotti (id, nome, descrizione, immagine) VALUES ($1, $2, $3, $4)";


module.exports = {
	getListaProdotti,
	getProdottoById,
	addProdotto,
};