const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
// eslint-disable-next-line no-unused-vars
const router = express.Router();

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({
    _id: userId
  });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

/*
Create a POST route for creating new contacts 
that returns the ID of the new contact and a 201 status
*/
const createCon = async (req, res) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const result = await mongodb.getDb().db().collection('contacts').insertOne(newContact);
  if (result.acknowledged) {
    res.status(201).json({
      message: 'Contact created successfully',
      contactId: result.insertedId
    });
  } else {
    res.status(404).json({
      message: 'Contact not created'
    });
  }
};

/*
Create a PUT route for updating a contact that returns a 204 status
*/
const updateCon = async (req, res) => {
  try {
    const ConID = new ObjectId(req.params.id);
    //console.log(req);
    //console.log('Attempting to read req.body: ', req.body);
    const updateContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const result = await mongodb.getDb().db().collection('contacts').updateOne(
      {
        _id: ConID
      },
      {
        $set: updateContact
      }
    );
    if (result.modifiedCount === 1) {
      res.status(204).json({
        message: 'Contact updated successfully'
      });
    } else {
      res.status(404).json({
        message: 'Contact not found'
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Unable to update contact'
    });
  }
};
/*
Create a DELETE route for deleting a contact that returns a 200 status
*/
const deleteCon = async (req, res) => {
  const deleteID = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').deleteOne({
    _id: deleteID
  });
  if (result.deletedCount === 1) {
    res.status(200).json({
      message: 'Contact deleted successfully'
    });
  } else {
    res.status(404).json({
      message: 'Contact not found'
    });
  }
};

module.exports = {
  getAll,
  getSingle,
  createCon,
  updateCon,
  deleteCon
};
