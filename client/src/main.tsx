// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Presse from "./pages/Presse/Revue";

/* ************************************************************************* */
import Contact from "./pages/Contact/Contact";

// Import the main app component
import App from "./App";
import Donation from "./components/NousAider";
import Reparation from "./components/Reparation";
import Tarif29 from "./components/Tarif-29euros";
import Tarif45 from "./components/Tarif-45euros";
import Tarif60 from "./components/Tarif-60euros";
import VehicleLocation from "./components/VehicleLocation";
import FormUser from "./pages/FormUser";
import Legal from "./pages/Legal";
import ProfilUser from "./pages/ProfilUser";
import Info from "./pages/Qui_sommes_nous/Presentation";
import TarifsReparations from "./pages/Tarifs/TarifsReparations";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />, // Renders the App component for the home page
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/compte", element: <FormUser /> },
      { path: "/legal", element: <Legal /> },
      {
        path: "/location",
        element: <VehicleLocation />,
      },
      {
        path: "/reparation",
        element: <Reparation />,
      },
      {
        path: "/tarifs-reparations",
        element: <TarifsReparations />,
      },
      {
        path: "/nous-aider",
        element: <Donation />,
      },
      {
        path: "/presse",
        element: <Presse />,
      },
      {
        path: "/tarif29",
        element: <Tarif29 />,
      },
      {
        path: "/tarif45",
        element: <Tarif45 />,
      },
      {
        path: "/tarif60",
        element: <Tarif60 />,
      },
      {
        path: "/profile",
        element: <ProfilUser />,
      },

      {
        path: "/qui-sommes-nous",
        element: <Info />,
      },
    ],
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
