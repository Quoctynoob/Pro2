// app/components/AddDataForm.tsx
import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function AddDataForm() {
  const [data, setData] = useState<string>("");

  const handleAddData = async () => {
    try {
      const docRef = await addDoc(collection(db, "your-collection-name"), {
        data
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAddData}>Add Data</button>
    </div>
  );
}