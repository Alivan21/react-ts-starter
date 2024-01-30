import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-6 bg-gray-100" id="error-page">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="text-2xl text-gray-700">Page not found</p>
      <p className="text-gray-700">
        The page you are looking for is <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
}
