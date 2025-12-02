// Recupero utente/i
const getListaUtenti = "SELECT * FROM utenti ORDER BY username";
const getUtenteByUsername = "SELECT * FROM utenti WHERE username = $1 ORDER BY username";

// Aggiunta utente
const addUtente = "INSERT INTO utenti (username, password, nome, cognome, email, citta, data_nascita, sesso) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";

// Cancellazione utente
const deleteUtente = "DELETE FROM utenti WHERE username = $1";

// Aggiornamento password
const aggiornaPassword = "UPDATE utenti SET password = $2 WHERE username = $1";

module.exports = {
	getListaUtenti,
	getUtenteByUsername,
	addUtente,
	deleteUtente,
	aggiornaPassword,
};