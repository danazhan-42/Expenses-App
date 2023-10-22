import { collection, addDoc, deleteDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(entry) {
  console.log("herer");
  try {
    const docRef = await addDoc(collection(database, "entries"), entry);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}
