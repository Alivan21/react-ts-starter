import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "@/pages/error-page";
import { PublicRoutes } from "@/routes/PublicRoutes";

export function AppRoutesProvider() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
