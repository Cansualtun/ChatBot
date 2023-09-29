import { createRoot } from "react-dom/client";
import routes from "./routes/index.tsx";
import { RouterProvider } from "react-router-dom";
import "./styles/tailwind.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={routes} />
);
