var express = require('express');
var uuidv4 = require('uuid/v4');
var { createIBAN } = require('../helper/helper');
var router = express.Router();

//in memory data base for mock usage and
//make the server very very simple and not well orgenized
var Invoices = [
  { id: uuidv4(), date: "05-03-2019", subject: "Rent January", bankAmount: "500 EUR", iban: createIBAN() },
  { id: uuidv4(), date: "01-03-2018", subject: "Rent Fabruary", bankAmount: "450 EUR", iban: createIBAN() },
  { id: uuidv4(), date: "01-02-2018", subject: "Rent March", bankAmount: "500 EUR", iban: createIBAN() },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//********* get All
router.get('/invoices', function (req, res) {
  let response = {
    status: true,
    data: Invoices
  }
  res.send(response);
});

//********* update
router.post('/invoice/:id', function (req, res) {
  let { id } = req.params;
  let { date, subject, bankAmount } = req.body;
  Invoices = Invoices.map(t => {
    if (t.id != id) return t
    else {
      return { ...t, date, subject, bankAmount }
    }
  });
  response = {
    status: true,
    message: 'Update was successful'
  }
  res.send(response);
});
//********* get By ID
router.get('/invoices/:id', function (req, res) {
  let { id } = req.params;
  let founded = Invoices.filter(t => t.id == id);
  let response = {};
  founded.length != 0 ?
    response = {
      status: true,
      data: founded
    }
    :
    response = {
      status: false,
      message: 'Not Found!!!'
    }
  res.send(response);
});

//********* ADD
router.post('/invoices/add', function (req, res) {
  let { date, subject, bankAmount, iban } = req.body;
  Invoices.push({
    id: uuidv4(),
    date,
    subject,
    bankAmount,
    iban: (iban == null) ? createIBAN() : req.body.iban,
  });
  let response = {
    status: true,
    data: Invoices
  }
  res.send(response);
});
//********* Remove
router.delete('/invoice/delete/:id', function (req, res) {
  let { id } = req.params;
  console.log(req.params);
  Invoices = Invoices.filter(t => t.id !== id);
  response = {
    status: true,
    message: 'Delete was successful'
  }
  res.send(response);
});

module.exports = router;
