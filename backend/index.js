const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createCliente } = require("@supabase/supabase-js");
require("dotenv").config;

const app = express();
const port = process.env.PORT || 4000;

// Config supabase
const supabase = createCliente(
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

  const { data, error } = await supabase.from("users").selected("*").eq('email', email).single();

  if(error) return res.status(400).json({ message: "User not found"});

  const isPasswordValid = await bcrypt.compare(password, data.password);
  
});
