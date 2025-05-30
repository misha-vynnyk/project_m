import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getDataById = async ({ collectionName, docId }) => {
  try {
    const ref = doc(db, collectionName, docId);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      console.log(`📦 Документ з '${collectionName}' отримано (ID: ${docId})`);
      return snap.data();
    } else {
      console.warn(`⚠️ Документ не знайдено в '${collectionName}' (ID: ${docId})`);
      return null;
    }
  } catch (error) {
    console.error("❌ Помилка при отриманні документа:", error);
    return null;
  }
};
