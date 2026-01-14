/*
    Tabella prodotti
*/

const getProdottoById = async (id) => {
    const response = await fetch(`api/prodotti/${id}`);
    return await response.json();
}

const getListaProdotti = async () => {
    const response = await fetch(`api/prodotti/`);
    return await response.json();
}

const addProdotto = async (nome, descrizione, immagine, utente) => {

	immagine = "/src/assets/img/oggetti/" + immagine;

    const response = await fetch('api/prodotti/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, descrizione, immagine, utente })
    });

	return await response.json();
}



/*
    Tabella utenti
*/

const getListaUtenti = async () => {
	const response = await fetch(`api/utenti/`);
	return await response.json();
}

const getUtenteByUsername = async (username) => {
    const response = await fetch(`api/utenti/${username}`);
    return await response.json();
}

const addUtente = async (username, password, nome, cognome, email, citta, eta, sesso) => {
	const response = await fetch('api/utenti/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({  username, password, nome, cognome, email, citta, eta, sesso })
	});

	return await response.json();
}


export {
    getProdottoById,
    getListaProdotti,
    addProdotto,

	getListaUtenti,
    getUtenteByUsername,
	addUtente,
}