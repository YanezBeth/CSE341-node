// CODE IS NOT MINE. Used Brother Birch's code as a reference to help me understand how to use MongoDB with Node.js
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/routes/contacts.js

//Create a GET request in your contacts route file that will return all of the documents in your contacts collection.
//Create another GET request in your contacts route file that will return a single document from your contacts collection where an id matches the id from a query parameter.

const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

//POST and PUT use json body
//Create a contact by using a POST route and return the new ID
router.post('/', contactsController.createCon);

//Update a contact by using a PUT route
router.put('/:id', contactsController.updateCon);

//Delete a contact by using a DELETE route
router.delete('/:id', contactsController.deleteCon);

module.exports = router;
