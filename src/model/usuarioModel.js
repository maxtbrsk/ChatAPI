const db = require('./db')
const token = require('../token/token')

async function entrar(data) {
  let usuario = await db.insertOne('usuarios', data)
  if (usuario.error) {
    return {message: 'Conta existente'}
  }
  jwtoken = token.generateToken({nick: data.nick})
  let resp = {
    usuario: data.nick,
    token: jwtoken
  }
  return resp;
}

async function sair(data) {
  let usuario = await db.findOne
  ('usuarios', data);
  if (usuario) {
    await db.deleteOne('usuarios', data);
    return {message: 'Usuário deixou a sala'};
  } else {
    return {message: 'Usuário não localizado'};
  }
}


module.exports = {entrar, sair};