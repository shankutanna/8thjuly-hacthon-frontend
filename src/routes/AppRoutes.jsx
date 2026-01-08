import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import ProtectedRoute from "../layout/ProtectedRoutes";
import MainLayout from "../layout/MainLayout";
import OperationsDashboard from "../modules/operations/pages/OperationsDashboard ";
import ManagementDashboard from "../modules/management/pages/ManagementDashboard ";
import LeadershipDashboard from "../modules/leadership/pages/LeadershipDashboard ";
import AuditLogsPage from "../modules/audits/page/AuditLogsPage ";
import WorkflowsPage from "../modules/operations/pages/WorkflowsPage";
import TasksPage from "../modules/operations/pages/TaskPage";
import ApprovalsPage from "../modules/management/pages/ApprovalsPage";
import AiInsightsPage from "../modules/leadership/pages/AiInsightsPage";
import HomePage from "../pages/home-page/HomePage";
import TicketsPage from "../modules/tickets/pages/TicketPage";
import Unauthorized from "../layout/Unathorized";
const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={ <HomePage/>} />
          <Route path="/login" element={<Login />} />

          <Route path="/operations/dashboard" element={
              <ProtectedRoute allowedRoles={["OPERATIONS"]}>
                  <MainLayout>
                      <OperationsDashboard/>
                  </MainLayout>
              </ProtectedRoute>
           } />
          <Route
              path="/operations/workflows"
              element={
                  <ProtectedRoute allowedRoles={["OPERATIONS"]}>
                      <MainLayout>
                          <WorkflowsPage />
                      </MainLayout>
                  </ProtectedRoute>
              }
          />

          <Route
              path="/operations/tasks"
              element={
                  <ProtectedRoute allowedRoles={["OPERATIONS"]}>
                      <MainLayout>
                          <TasksPage />
                      </MainLayout>
                  </ProtectedRoute>
              }
          />

        
          <Route
              path="/management/dashboard"
              element={
                  <ProtectedRoute allowedRoles={["MANAGEMENT"]}>
                      <MainLayout>
                          <ManagementDashboard />
                      </MainLayout>
                  </ProtectedRoute>
              }
          />

          <Route
              path="/management/approvals"
              element={
                  <ProtectedRoute allowedRoles={["MANAGEMENT"]}>
                      <MainLayout>
                          <ApprovalsPage />
                      </MainLayout>
                  </ProtectedRoute>
              }
          />

          <Route path="/leadership/dashboard" element={
              <ProtectedRoute allowedRoles={["LEADERSHIP"]}>
                  <MainLayout>
                      <LeadershipDashboard/>
                  </MainLayout>
              </ProtectedRoute>
           } />
         

          <Route
              path="/leadership/insights"
              element={
                  <ProtectedRoute allowedRoles={["LEADERSHIP"]}>
                      <MainLayout>
                          <AiInsightsPage />
                      </MainLayout>
                  </ProtectedRoute>
              }
          />

          <Route path="/audits/logs" element={
              <ProtectedRoute allowedRoles={["AUDITORS"]}>
                  <MainLayout>
                      <AuditLogsPage/>
                  </MainLayout>
              </ProtectedRoute>
           } />
          <Route
              path="/operations/requests"
              element={
                  <ProtectedRoute allowedRoles={["OPERATIONS"]}>
                      <MainLayout>
                          <TicketsPage />
                      </MainLayout>
                  </ProtectedRoute>
              }
          />

          <Route
              path="/leadership/reviews"
              element={
                  <ProtectedRoute allowedRoles={["LEADERSHIP"]}>
                      <MainLayout>
                          <TicketsPage />
                      </MainLayout>
                  </ProtectedRoute>
              }
          />

          <Route
              path="/management/actions"
              element={
                  <ProtectedRoute allowedRoles={["MANAGEMENT"]}>
                      <MainLayout>
                          <TicketsPage />
                      </MainLayout>
                  </ProtectedRoute>
              }
          />

          <Route
              path="/auditors/decisions"
              element={
                  <ProtectedRoute allowedRoles={["AUDITORS"]}>
                      <MainLayout>
                          <TicketsPage />
                      </MainLayout>
                  </ProtectedRoute>
              }
          />

          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default AppRoutes