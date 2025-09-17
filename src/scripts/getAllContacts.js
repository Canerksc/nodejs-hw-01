import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {

   return await readContacts(); // db.json'dan diziyi oku


};

console.log(await getAllContacts());

