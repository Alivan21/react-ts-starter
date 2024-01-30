import Spinner from "@/components/spinner";

function LoadingPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white">
      <Spinner />
    </section>
  );
}
export default LoadingPage;
