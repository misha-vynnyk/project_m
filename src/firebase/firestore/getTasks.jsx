import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getTasks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks: ", error);
    return [];
  }
};
