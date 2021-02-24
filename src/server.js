const port = 3003;

const express = require('express');
const bd = require('./bancoDeDados');
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor iniciado! Porta: ${port}`)
})

app.get('/usuario', (req, res, next) => {
  res.send(bd.listItems(res))
})

app.get('/usuario/:id', (req, res, next) => {
  const id = +req.params.id;
  res.send(bd.getItem(id, res))
})

app.post('/usuario', (req, res, next) => {
  const item = bd.createItem({
    nome: req.body.nome,
    email: req.body.email,
    endereco: req.body.endereco
  }, res)
  res.send(item)
})

app.put('/usuario/:id', (req, res, next) => {
  const id = +req.params.id;
  const item = {
    nome: req.body.nome,
    email: req.body.email,
    endereco: req.body.endereco
  }
  res.send(bd.putItem(id, item, res))
})

app.delete('/usuario/:id', (req, res, next) => {
  const id = +req.params.id;
  res.send(bd.deleteItem(id, res))
})