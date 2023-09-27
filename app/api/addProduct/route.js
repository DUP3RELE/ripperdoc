const express = require("express");
const router = express.Router();
const Product = require("./models/Product");
const authMiddleware = require("./middlewares/auth");

router.post("/add-product", authMiddleware, async (req, res) => {
	// Sprawdź, czy zalogowany użytkownik ma uprawnienia do dodawania produktów
	if (req.user.role !== "SPECIAL") {
		return res.status(403).send("Brak uprawnień");
	}

	// Dodaj nowy produkt do bazy danych
	const product = new Product(req.body);
	await product.save();

	res.status(201).send(product);
});

module.exports = router;
