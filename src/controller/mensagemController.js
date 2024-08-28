let mensagemModel = require('../model/mensagemModel');
let token = require('../token/token');

exports.get = async (req, res) => {
    if (!token.checkToken(req.headers.authorization)){
        return {error: "Token inválido"};
    }
    let resp = await mensagemModel.listarMensagens(req.params.id);
    return resp;
}

exports.post = async (req, res) => {
    if (!token.checkToken(req.headers.authorization)){
        return {error: "Token inválido"};
    }
    let resp = await mensagemModel.enviarMensagem(req);
    return resp;
}