// hooks/useDeleteTask.ts
import { deleteField, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useDeleteData = () => {
  const deleteData = async ({
    projectId,
    taskId,
    columnId,
    currentTaskIds,
  }) => {
    try {
      const ref = doc(db, "projects", projectId);

      const updatedTaskIds = currentTaskIds.filter((id) => id !== taskId);

      await updateDoc(ref, {
        [`tasks.${taskId}`]: deleteField(),
        [`columns.${columnId}.taskIds`]: updatedTaskIds,
      });

      console.log(`✅ Таска ${taskId} видалена з проєкту ${projectId}`);
      return updatedTaskIds;
    } catch (error) {
      console.error("❌ Помилка при видаленні таски:", error);
      throw error;
    }
  };

  return { deleteData };
};
