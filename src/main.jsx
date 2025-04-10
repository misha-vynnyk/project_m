import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LoginProvider } from "./context/loginProvider.jsx";

createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <App />
  </LoginProvider>
);
