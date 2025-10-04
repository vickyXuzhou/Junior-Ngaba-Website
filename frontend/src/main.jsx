import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App.jsx";
import NotFoundPage from "../pages/notFoundPage.jsx";
import AboutN from "../pages/aboutN.jsx";
import Contact from "../pages/contact.jsx";
// import About from "../pages/about.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutN />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
