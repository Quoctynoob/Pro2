// pages/addData.tsx
import ProtectedRoute from "../app/components/ProtectedRoute";
import AddDataForm from "../app/components/AddDataForm";

export default function AddDataPage() {
  return (
    <ProtectedRoute>
      <AddDataForm />
    </ProtectedRoute>
  );
}