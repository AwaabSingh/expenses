const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransactions,
} = require('../controller/transaction');
// const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getTransactions).post(addTransaction);

router.route('/:id').delete(deleteTransactions);

module.exports = router;
