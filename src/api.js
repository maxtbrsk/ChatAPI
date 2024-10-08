const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res) => {
    res.status(200).send('Chat API Max!');}    
));

app.use('/salas', router.get('/salas', async (req,res) => {
    const salaController = require('./controller/salaController');
    let resp = await salaController.get(req);
    res.status(200).send(resp);
}));

app.use('/salas/:id', router.get('/salas/:id', async (req,res) => {
    const salaController = require('./controller/salaController');
    let resp = await salaController.getById(req);
    res.status(200).send(resp);
}));

app.use('/salas', router.post('/salas', async (req,res) => {
    const salaController = require('./controller/salaController');
    let resp = await salaController.post(req, res);
    res.status(200).send(resp);
}));

app.use("/salas/entrar", router.post('/salas/entrar', async (req,res) => {
    const salaController = require('./controller/salaController');
    let resp = await salaController.entrar(req, res);
    res.status(200).send(resp);
}));

app.use('/salas/sair', router.post('/salas/sair', async (req,res) => {
    const salaController = require('./controller/salaController');
    let resp = await salaController.sair(req, res);
    res.status(200).send(resp);
}));

app.use('/entrar', router.post('/entrar', async (req,res) => {
    const usuarioController = require('./controller/usuarioController');
    let resp = await usuarioController.post(req, res);
    res.status(200).send(resp);
}));

app.use('/sair' , router.post('/sair', async (req,res) => {
    const usuarioController = require('./controller/usuarioController');
    let resp = await usuarioController.delete(req, res);
    res.status(200).send(resp);
}));

app.use('/mensagens/:id', router.get('/mensagens/:id', async (req,res) => {
    const mensagemController = require('./controller/mensagemController');
    let resp = await mensagemController.get(req);
    res.status(200).send(resp);
}));

app.use('/mensagens', router.post('/mensagens', async (req,res) => {
    const mensagemController = require('./controller/mensagemController');
    let resp = await mensagemController.post(req, res);
    res.status(200).send(resp);
}));


module.exports = app;