import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DarkModeContextProvider } from "./context/darkMode.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </StrictMode>
);
