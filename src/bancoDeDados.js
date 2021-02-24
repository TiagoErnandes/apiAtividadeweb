
const sequence = {
  _id: 0,
  get id() {
    return this._id++;
  }
}

const listaUsuarios = {}

function createItem(item, res) {
  item.id = sequence.id;
  listaUsuarios[item.id] = item;
  res.status(200);
  return item;
}
function getItem(id, res) {
  if (!listaUsuarios[id]) {
    res.status(404).send({ erro: `Erro! Usuário ${id} não encontrado` });
  }
  return listaUsuarios[id];
}
function listItems(res) {
  res.status(200)
  return Object.values(listaUsuarios)
}
function putItem(id, item, res) {
  if (!listaUsuarios[id]) {
    res.status(404).send({ erro: `Erro! Usuário ${id} não encontrado` });
  }
  res.status(200)
  listaUsuarios[id] = item;
  return listaUsuarios[id];
}
function deleteItem(id, res) {
  if (!listaUsuarios[id]) {
    res.status(404).send({ erro: `Erro! Usuário ${id} não encontrado` });
  }
  delete listaUsuarios[id];
  res.status(200).send({ status: `Usuário ${id} deletado` })

}
module.exports = { createItem, getItem, listItems, putItem, deleteItem }