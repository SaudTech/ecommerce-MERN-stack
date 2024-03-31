import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className=" min-h-screen">
      <main className="container mx-auto p-4">
        
        <App />
        
        <footer className="text-center text-white mt-4">
          <p>
            Made with 💖 by{" "}
            <a
              href="https://upwork.com/saud"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Saud
            </a>
          </p>
        </footer>
      </main>
    </div>
  </React.StrictMode>
);
