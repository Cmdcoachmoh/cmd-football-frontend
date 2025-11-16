import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProgressChartPage = lazy(() => import("./pages/ProgressChartPage"));
const DrillBuilderPage = lazy(() => import("./pages/DrillBuilderPage"));
const ExamEntryPage = lazy(() => import("./pages/ExamEntryPage"));
const TeamReportPage = lazy(() => import("./pages/TeamReportPage"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/progress-chart" element={<ProgressChartPage />} />
          <Route path="/drill-builder" element={<DrillBuilderPage />} />
          <Route path="/exam-entry" element={<ExamEntryPage />} />
          <Route path="/team-report" element={<TeamReportPage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
