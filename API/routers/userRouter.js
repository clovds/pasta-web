const router = require("express").Router();
const query = require("../database");
const { hashPassword } = require("../helpers");
const { createJWTToken, checkToken } = require("../helpers/jwt");
const { transpostPromise } = require("../helpers/nodemailer");

router.post("/register", async (req, res) => {
  let { email, password } = req.body;
  password = hashPassword(password);
  try {
    const insert = await query(
      `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`
    );
    const mailOptions = {
      from: "Wido Wicaksono <wido.wicaksono55@gmail.com>",
      to: email,
      subject: "Email Verification",
      html: `<h1>Thank you ${email} for trying to register in my portofolio.</h1> <br> <h3>Wido Wicaksono</h3>`,
    };
    await transpostPromise(mailOptions);
    const select = await query(
      `SELECT id, email FROM users WHERE id = ${insert.insertId}`
    );
    const responseData = { ...select[0] };
    const token = createJWTToken(responseData);
    responseData.token = token;
    return res.status(200).send(responseData);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let sql = `SELECT id, email FROM users WHERE email = '${email}' AND password = '${hashPassword(
    password
  )}'`;
  try {
    const response = await query(sql);
    if (response.length === 0) {
      return res.status(404).send({
        message: "User not found",
        status: "Not found",
      });
    }
    const responseData = { ...response[0] };
    const token = createJWTToken(responseData);
    responseData.token = token;
    return res.status(200).send(responseData);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

router.post("/keep-login", checkToken, async (req, res) => {
  try {
    const response = await query(
      `SELECT id, email FROM users WHERE id = ${req.user.id}`
    );
    return res.status(200).send(response[0]);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

module.exports = router;
