const express = require("express");
const {
  AddTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction
} = require("../controllers/transactioncont");

//router object
const router = express.Router();

//routes
//add transaction using post method
router.post("/add-transaction", AddTransaction);
//edit transaction using post method
router.post("/edit-transaction", editTransaction);

router.post("/delete-transaction", deleteTransaction);
//get transactions
router.post("/get-transaction", getAllTransaction);
module.exports = router;
