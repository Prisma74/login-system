const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createClient } = require("@supabase/supabase-js");
const e = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;


// Config supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, password: hashedPassword }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json({ message: "User created successfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error) return res.status(400).json({ message: "User not found" });

  const isPasswordValid = await bcrypt.compare(password, data.password);
  if (!isPasswordValid)
    return res.status(400).json({ error: "Incorrect password" });

  const token = jwt.sign(
    { id: data.id, email: data.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.json({ token });
});

app.get("/profile", verifyToken, async (req, res) => {
  const { id } = req.user;

  const { data, error } = await supabase
    .from("users")
    .select("id, name, email")
    .eq("id", id)
    .single();

  if (error) return res.status(400).json({ error: "User not found" });

  res.json(data);
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader)
    return res.status(403).json({ error: "No token provide" });

  const token = bearerHeader.split(" ")[1];
  if (!token) return res.status(403).json({ error: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Not valid token" });
    req.user = user;
    next();
  });
}

app.listen(port, () => {
  console.log(`The server is running in http://localhost:${port}`);
});
