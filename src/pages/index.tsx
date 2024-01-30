import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import { Button } from "@/components/ui/button";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="flex min-h-screen bg-gray-700 text-white">
      <div className="container flex flex-col items-center justify-center gap-5">
        <div className="flex items-center justify-center gap-5">
          <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
            <img alt="Vite logo" className="w-[7rem]" src={viteLogo} />
          </a>
          <a href="https://react.dev" rel="noreferrer" target="_blank">
            <img alt="React logo" className="w-[7rem] animate-spin duration-1000" src={reactLogo} />
          </a>
        </div>
        <h1 className="text-xl font-bold">Vite + React</h1>
        <div className="flex flex-col items-center justify-center gap-3">
          <Button onClick={() => setCount(count => count + 1)}>Count is {count}</Button>
          <p>
            Edit <code>src/pages/index.tsx</code> and save to test HMR
          </p>
        </div>
        <p>Click on the Vite and React logos to learn more</p>
      </div>
    </section>
  );
}

export default App;
