const express = require("express");
const expRouter = express.Router();
const cors = require("cors");
const { getExpenses, createExpenses, deleteAllExpenses, deleteExpense } = require("../controllers/expController");

expRouter.get("/get/expenses", getExpenses);
expRouter.post("/post/expenses", createExpenses);
expRouter.delete("/delete/all", deleteAllExpenses);
expRouter.delete("/delete/:expenseId", deleteExpense);

module.exports = expRouter;