const getProdottoById = async (id) => {
    const response = await fetch(`api/prodotti/${id}`);
    return await response.json();
}

const getListaProdotti = async () => {
    const response = await fetch(`api/prodotti/`);
    return await response.json();
}

const addProdotto = async (nome, descrizione, immagine, utente) => {
    const response = await fetch('api/prodotti/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, descrizione, immagine, utente })
    });

	return await response.json();
}

export {
    getProdottoById,
    getListaProdotti,
    addProdotto,
}