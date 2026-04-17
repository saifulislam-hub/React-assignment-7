import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";

import RootLayout from "./Layout/RootLayout";
import Homepage from "./Pages/Homepage/Homepage";
import Timeline from "./Pages/Timeline/Timeline";
import Stats from "./Pages/State/Stats";
import Frienddetails from "./Pages/Frienddetails/Frienddetails";
import { TimelineProvider } from "./context/TimelineContext";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/friend/:id",
        element: <Frienddetails/>,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
    errorElement: <ErrorPage/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <TimelineProvider>
      <RouterProvider router={router} />
     </TimelineProvider>
  </StrictMode>
);