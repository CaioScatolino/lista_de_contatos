import { readFile, writeFile } from "fs/promises";
const dataSource = "data/list.json";

export const getContacts = async () => {
  let list: string[] = [];

  try {
    const data = await readFile(dataSource, "utf-8");
    list = JSON.parse(data);
  } catch (err) {
    console.log(err);
  }

  return list;
};

export const createContact = async (name: string) => {
  let list = await getContacts();

  list.push(name);

  try {
    await writeFile(dataSource, JSON.stringify(list));
  } catch (err) {
    console.log(err);
  }
};

export const deleteContact = async (name: string) => {
  let list = await getContacts();

  list = list.filter(
    (contact) => contact.toLowerCase() !== name.toLowerCase()
  );

  try {
    await writeFile(dataSource, JSON.stringify(list));
  } catch (err) {
    console.log(err);
  }
};
