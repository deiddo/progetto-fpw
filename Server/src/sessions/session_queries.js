const login = "SELECT * from utenti WHERE username = $1 AND password = $2";

module.exports = { login };