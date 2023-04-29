// CODE IS NOT MINE. Used Brother Birch's code as a reference to help me understand how to use MongoDB with Node.js
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/controllers/contacts.js

const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

/*async function getAll(req, res, next) {
  try {
    const contacts = await mongodb.getDb().db().collection('contacts').find().toArray();
    res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}*/


const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({
      _id: userId
    });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

/*async function getSingle(req, res, next) {
  try {
    const userId = new ObjectId(req.params.id);
    const contact = await mongodb.getDb().db().collection('contacts').findOne({ _id: userId });
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).send(`Contact with id ${req.params.id} not found`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}*/


module.exports = {
  getAll,
  getSingle
};