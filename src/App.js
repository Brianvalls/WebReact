import React from "react";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center">¡Bienvenido a mi aplicación!</h1>
      </main>
    </div>
  );
}

export default App;
