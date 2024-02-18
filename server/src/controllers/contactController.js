const Contacts = require("../data/contact")
const { cachedAsync } = require("../utils")
const { response } = require("../utils")

const getContacts = async (req, res) => {
  const Contacts = await Contacts.list();
  response(res, req, 200, Contacts)
}

const postContact = async (req, res) => {
  const contact = await Contacts.create(req.body);
  response(res, req, 201, contact)
}

const deleteContact = async (req, res) => {
  const { id } = req.params;
  await Contacts.delete(id);
  response(res, req, 204, [])
}

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const contact = await Contacts.getOne(id);
  response(res, req, 200, contact)
}

const putContact = async (req, res) => {
  const { id } = req.params;
  const contact = await Contacts.update(id, req.body);
  response(res, req, 200, contact)
}


module.exports = {
  getContacts: cachedAsync(getContacts),
  postContact: cachedAsync(postContact),
  deleteContact: cachedAsync(deleteContact),
  getOneContact: cachedAsync(getOneContact),
  putContact: cachedAsync(putContact)
}