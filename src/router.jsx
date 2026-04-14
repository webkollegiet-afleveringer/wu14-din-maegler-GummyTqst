import { createBrowserRouter, redirect } from "react-router";

import RootLayout from "./layout/Layout";
import ErrorPage from "./pages/ErrorPage";

import HomePage from "./pages/HomePage";
import PropertyListPage from "./pages/PropertyListPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import AgentsPage from "./pages/AgentsPage";
import AgentDetailPage from "./pages/AgentDetailPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { homeLoader } from "./loaders/homeLoader";
import { propertiesLoader } from "./loaders/propertiesLoader";
import { propertyDetailLoader } from "./loaders/propertyDetailLoader";
import { agentsLoader } from "./loaders/agentsLoader";
import { agentDetailLoader } from "./loaders/agentDetailLoader";

import { useAuthStore } from "./store/useAuthStore";

// Called before rendering any auth-gated route.
// Reads token directly from Zustand state (no hook — this runs outside React).
function requireAuth() {
  const token = useAuthStore.getState().token;
  if (!token) {
    return redirect("/login");
  }
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "properties",
        element: <PropertyListPage />,
        loader: propertiesLoader,
      },
      {
        path: "properties/:id",
        element: <PropertyDetailPage />,
        loader: propertyDetailLoader,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
        // Redirect to login if not authenticated
        loader: requireAuth,
      },
      {
        path: "agents",
        element: <AgentsPage />,
        loader: agentsLoader,
      },
      {
        path: "agents/:id",
        element: <AgentDetailPage />,
        loader: agentDetailLoader,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;