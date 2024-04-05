import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/layouts/HomePage";
import Checkout from "./components/layouts/Checkout";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
