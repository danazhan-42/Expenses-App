import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(entry) {
  try {
    const docRef = await addDoc(collection(database, "entries"), entry);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteToDB(id) {
  try {
    await deleteDoc(doc(firestore, "entries", id));
  } catch (err) {
    console.log(err);
  }
}

export async function updateToDB(id, entry) {
  try {
    await updateDoc(doc(database, "entries", id), entry);
  } catch (err) {
    console.log(err);
  }
}
