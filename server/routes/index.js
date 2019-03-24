var express = require('express');
var uuidv4 = require('uuid/v4');
var { createIBAN } = require('../helper');
var router = express.Router();

//in memory data base for mock usage and
//make the server very very simple and not well orgenized
var Invoices = [
  { id: uuidv4(), date: "05-03-2019", subject: "Rent January", bankAmount: "500", iban: createIBAN() },
  { id: uuidv4(), date: "01-03-2018", subject: "Rent Fabruary", bankAmount: "450", iban: createIBAN() },
  { id: uuidv4(), date: "01-02-2018", subject: "Rent March", bankAmount: "500", iban: createIBAN() },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//********* get bank payments
router.get('/payments/:iban', function (req, res, next) {
  let { iban } = req.params;
  payments = Invoices.filter(t => t.iban.indexOf(iban) != -1);
  let response = {
    status: true,
    data: payments
  }
  res.send(response);
});

router.get('/invoice', function (req, res) {
  let response = {
    status: true,
    data: Invoices
  }
  res.send(response);
});

router.get('/invoice/:id', function (req, res) {
  let { id } = req.params;
  
  let founded = Invoices.filter(t => t.id == id);
  let response = {
    status: founded.length != 0,
    data: (founded.length != 0) ? founded[0] : undefined,
    message: (founded.length != 0) ? undefined : "not found",
  };

  res.send(response);
});

router.post('/invoice/:id', function (req, res) {
  let { id } = req.params;
  let { date, subject, bankAmount, iban } = req.body;

  Invoices = Invoices.map(t => (t.id != id) ? t : { ...t, date, subject, bankAmount, iban });
  let response = {
    status: true,
    message: 'Update was successful'
  }

  res.send(response);
});

router.post('/invoice', function (req, res) {
  let { date, subject, bankAmount, iban } = req.body;

  let newInvoice = { id: uuidv4(), date, subject, bankAmount, iban };
  Invoices.push(newInvoice);
  let response = {
    status: true,
    data: newInvoice
  }

  res.send(response);
});

//********* Remove
router.delete('/invoice/:id', function (req, res) {
  let { id } = req.params;
  Invoices = Invoices.filter(t => t.id !== id);
  response = {
    status: true,
    message: 'Delete was successful'
  }
  res.send(response);
});

module.exports = router;
