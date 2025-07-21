import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import App from './App'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Pension from './Pages/Pension/Pension'
import NotFound from './Components/NotFound/NotFound'
import PetSitting from './Pages/PetSitting/PetSitting'
import Shop from './Pages/Shop/Shop'
import FAQ from './Pages/FAQ/FAQ'
import Contact from './Pages/Contact/Contact'
import MentionsLegales from './Pages/MentionsLegales/MentionsLegales'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/histoire",
        element: <About />,
      },
      {
        path: "/pension",
        element: <Pension />,
      },
      {
        path: "/boutique",
        element: <Shop />,
      },
      {
        path: "/pet-sitting",
        element: <PetSitting />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/mentions-legales",
        element: <MentionsLegales />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
