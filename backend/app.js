const express = require("express");
import { jsPDF } from "jspdf";
import logo_base_64 from "../assets/data";

const app = express();

app.get("/", (req, res) => res.send("okay"));

app.post("/generate-invoice", (req, res) => {
  const { title, price, id } = req.body;
});

app.listen(process.env.PORT || 5000);
