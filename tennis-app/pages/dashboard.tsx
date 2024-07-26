// pages/dashboard.tsx
import ProtectedRoute from "@/app/components/layout/ProtectedRoute";
import DashboardContent from "@/app/components/layout/DashboardContent";

const DashboardPage: React.FC = () => {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
};

export default DashboardPage;