import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import SplashScreen from "./components/SplashScreen";
import DrillLibraryPage from "@pages/DrillLibraryPage";

// Lazy-loaded core pages
const HomePage = lazy(() => import("./pages/HomePage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProgressChartPage = lazy(() => import("./pages/ProgressChartPage"));
const DrillBuilderPage = lazy(() => import("./features/drill/DrillBuilderPage"));
const ExamEntryPage = lazy(() => import("./pages/ExamEntryPage"));
const TeamReportPage = lazy(() => import("./pages/TeamReportPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Lazy-loaded feature modules
const PlayerList = lazy(() => import("./features/players/PlayerList"));
const CoachDashboard = lazy(() => import("./features/coach/Dashboard"));
const ParentPortal = lazy(() => import("./features/parent/ParentPortal"));

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
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
          <Route path="/drill-library" element={<DrillLibraryPage />} />
          


          {/* Feature modules */}
          <Route path="/players" element={<PlayerList />} />
          <Route
            path="/coach-dashboard"
            element={
              <PrivateRoute>
                <CoachDashboard />
              </PrivateRoute>
            }
          />
          <Route path="/parent-portal" element={<ParentPortal />} />

          {/* Fallback route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
