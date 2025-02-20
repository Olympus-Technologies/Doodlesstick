import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { About } from "./pages/About/About";
import Bookings from "./pages/Bookings/Bookings";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import Domiciliary_Care from "./pages/Services/domiciliary_care/domiciliary_care";
import Healthcare_Business_Consultation from "./pages/Services/healthcare_business_consultation/healthcare_business_consultation";
import Healthcare_Recruitment from "./pages/Services/healthcare_recruitment/healthcare_recruitment";
import Healthcare_Training from "./pages/Services/healthcare_training/healthcare_training";
import Live_In_Care from "./pages/Services/live_in_care/live_in_care";
import Services from "./pages/Services/Services";
import Supported_Living from "./pages/Services/supported_living/supported_living";
import { Vacancies } from "./pages/Vacancies/Vacancies";
import SupportedLiving from "./pages/Services/supported_living/SupportedLiving";
import { HeadProvider } from "react-head";
import { Job } from "./pages/Vacancies/Job";
import ComingSoon from "./components/training_products/coming_soon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/vacancies",
    element: <Vacancies />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/supported-living",
    element: <Supported_Living />,
  },
  {
    path: "/domiciliary-care",
    element: <Domiciliary_Care />,
  },
  {
    path: "/live-in-care",
    element: <Live_In_Care />,
  },
  {
    path: "/healthcare-recruitment",
    element: <Healthcare_Recruitment />,
  },
  {
    path: "/healthcare-business-consultation",
    element: <Healthcare_Business_Consultation />,
  },
  {
    path: "/healthcare-training",
    element: <Healthcare_Training />,
  },
  {
    path: "/bookings",
    element: <Bookings />,
  },
  {
    path: "/job",
    element: <Job />,
  },
  {
    path: "/coming-soon",
    element: <ComingSoon />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeadProvider>
      <RouterProvider router={router} />
    </HeadProvider>
  </StrictMode>
);
