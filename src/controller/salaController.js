let salaModel = require('../model/salaModel')
let token = require('../token/token')

exports.post = async (req, res) => {
    if (!token.checkToken(req.headers.authorization)){
        return {error: "Token inválido"}
    }
    let resp = await salaModel.criarSala(req.body)
    return {salaId: resp.insertedId}
}

exports.get = async (req, res) => {
     if (!token.checkToken(req.headers.authorization)){
        return {error: "Token inválido"}
    }
    let resp = await salaModel.listarSalas()
    return resp
}

exports.entrar = async (req, res) => {
    if (!token.checkToken(req.headers.authorization)){
        return {error: "Token inválido"}
    }
    let resp = await salaModel.entrarSala(req)
    return resp
}

exports.sair = async (req, res) => {
    if (!token.checkToken(req.headers.authorization)){
        return {error: "Token inválido"}
    }
    let resp = await salaModel.sairSala(req)
    return resp
}

exports.getById = async (req, res) => {
    if (!token.checkToken(req.headers.authorization)){
        return {error: "Token inválido"}
    }
    let resp = await salaModel.getSalaById(req.params.id)
    return resp
}