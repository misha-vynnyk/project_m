import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

/**
 * Додає новий документ у вказану колекцію
 * @param {Object} options
 * @param {string} options.collectionName - Назва колекції (наприклад, "projects", "tasks", "users")
 * @param {Object} options.data - Об'єкт з даними для додавання
 */
export const addData = async ({ collectionName, data }) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log(`✅ Документ додано до '${collectionName}' з ID:`, docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("❌ Помилка при додаванні документа:", error);
    return null;
  }
};
