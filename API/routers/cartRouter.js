const router = require("express").Router();
const query = require("../database");

// Add Product to Cart
router.post("/add", async (req, res) => {
  const { userID, productID, qty, productName, productPrice } = req.body;
  try {
    const findCart = await query(
      `SELECT * FROM cart WHERE userID = ${userID} AND productID = ${productID}`
    );
    console.log(findCart);
    if (findCart.length !== 0) {
      const qty = findCart[0].qty + 1;
      await query(
        `UPDATE cart SET qty = ${qty} WHERE userID = ${userID} AND productID = ${productID}`
      );
    } else {
      const insert = await query(
        `INSERT INTO cart (userID, productID, qty, productName, productPrice) VALUES (${userID}, ${productID}, ${qty}, '${productName}', ${productPrice})`
      );
    }
    return res.status(200).send({ message: "Added to cart" });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

// Get Cart by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const response = await query(`SELECT * FROM cart WHERE userID = ${id}`);
    return res.status(200).send(response);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

// Delete Product By CartID
router.post("/delete", async (req, res) => {
  const { cartID } = req.body;
  try {
    await query(`DELETE FROM cart WHERE id = ${cartID}`);
    return res.status(200).send({ message: "Deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

// Checkout
router.post("/checkout", async (req, res) => {
  const { userID } = req.body;
  console.log(userID);
  try {
    await query(`DELETE FROM cart WHERE userID = ${userID}`);
    return res.status(200).send({ message: "Checkout" });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

module.exports = router;
