import { collection, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(entry) {
  try {
    const docRef = await addDoc(collection(database, "entries"), entry);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function updateToDB(id, entry) {
  try {
    updateDoc(doc(database, "entries", id), entry);
  } catch (err) {
    console.log(err);
  }
}
