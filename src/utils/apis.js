const getProdottoById = async (id) => {
    const response = await fetch(`api/prodotti/${id}`);
    return await response.json();
}

const getListaProdotti = async () => {
    const response = await fetch(`api/prodotti`);
    return await response.json();
}

export {
    getProdottoById,
    getListaProdotti,
}