import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "@/pages/loading-page";

const App = lazy(() => import("@/pages/index"));

export function PublicRoutes() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route element={<App />} index />
      </Routes>
    </Suspense>
  );
}
