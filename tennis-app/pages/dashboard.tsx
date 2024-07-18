// pages/dashboard.tsx
import ProtectedRoute from "../app/components/ProtectedRoute";
import DashboardContent from "@/app/components/DashboardContent";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}