import express from "express";
import {
  createContact,
  deleteContact,
  getContacts,
} from "../services/contact.js";
const router = express.Router();

router.post("/contato", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  } else if (name.length < 2) {
    return res
      .status(400)
      .json({ error: "Name must be at least 2 characters long" });
  }

  await createContact(name);

  return res.status(201).json({ contato: name });
});

router.get("/contatos", async (req, res) => {
  let list = await getContacts();

  return res.status(200).json({ contatos: list });
});

router.delete("/contato", async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  await deleteContact(name as string);

  return res.status(200).json({ contato: name });
});

export default router;
