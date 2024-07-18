// pages/dashboard.tsx
import ProtectedRoute from "../app/components/ProtectedRoute";
import DashboardContent from "@/app/components/DashboardContent";

const DashboardPage: React.FC = () => {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
};

export default DashboardPage;