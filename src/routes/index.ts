import express from "express";
import { readFile, writeFile } from "fs/promises";
const router = express.Router();

const dataSource = "data/list.json";

router.post("/contato", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  } else if (name.length < 2) {
    return res
      .status(400)
      .json({ error: "Name must be at least 2 characters long" });
  }

  // TODO: Save contact in database
  let list: string[] = [];

  try {
    const data = await readFile(dataSource, "utf-8");
    list = JSON.parse(data);
  } catch (err) {
    console.log(err);
  }

  list.push(name);

  try {
    await writeFile(dataSource, JSON.stringify(list));
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to save contact" });
  }

  return res.status(201).json({ contato: name });
});

router.get("/contatos", async (req, res) => {
  let list: string[] = [];

  try {
    const data = await readFile(dataSource, "utf-8");
    list = JSON.parse(data);
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ contatos: list });
});

export default router;
