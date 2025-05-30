import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const updateData = async ({ collectionName, docId, updatedData }) => {
  try {
    const ref = doc(db, collectionName, docId);
    await updateDoc(ref, updatedData);
    console.log(`✅ Документ у '${collectionName}' оновлено (ID: ${docId})`);
  } catch (error) {
    console.error("❌ Помилка при оновленні документа:", error);
  }
};

export const updateTaskOrderInFirestore = async ({
  projectId,
  updatedStartColumn,
  updatedFinishColumn,
}) => {
  try {
    const projectRef = doc(db, "projects", projectId);

    await updateDoc(projectRef, {
      [`columns.${updatedStartColumn.id}.taskIds`]: updatedStartColumn.taskIds,
      [`columns.${updatedFinishColumn.id}.taskIds`]:
        updatedFinishColumn.taskIds,
    });

    console.log("✅ Task order updated in Firestore");
  } catch (error) {
    console.error("❌ Error updating task order:", error);
  }
};