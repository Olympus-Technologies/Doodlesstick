import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { About } from "./pages/About/About";
import Bookings from "./pages/Bookings/Bookings";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import Domiciliary_Care from "./pages/Services/domiciliary_care/domiciliary_care";
import Children_Care_Services from "./pages/Services/children_care_services/children_care_services";
import Healthcare_Business_Consultation from "./pages/Services/healthcare_business_consultation/healthcare_business_consultation";
import Healthcare_Recruitment from "./pages/Services/healthcare_recruitment/healthcare_recruitment";
import Healthcare_Training from "./pages/Services/healthcare_training/healthcare_training";
import Live_In_Care from "./pages/Services/live_in_care/live_in_care";
import Services from "./pages/Services/Services";
import Supported_Living from "./pages/Services/supported_living/supported_living";
import { Vacancies } from "./pages/Vacancies/Vacancies";
import { HeadProvider } from "react-head";
import { Job } from "./pages/Vacancies/Job";
import ComingSoon from "./components/training_products/coming_soon";
import { AppLayout } from "./components/AppLayout";
import ADHD from "./pages/ADHD/ADHD";
import PrivateAssessment from "./pages/ADHD/PrivateAssessment";
import Treatment from "./pages/ADHD/Treatment";
import AssessmentProcess from "./pages/ADHD/AssessmentProcess";
import NhsRightToChoose from "./pages/ADHD/NhsRightToChoose";
import ForProfessionals from "./pages/ADHD/ForProfessionals";
import ExistingDiagnosis from "./pages/ADHD/ExistingDiagnosis";
import Faqs from "./pages/ADHD/Faqs";
import BookAssessment from "./pages/ADHD/BookAssessment";
import Enquiry from "./pages/ADHD/Enquiry";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
    path: "/children-care-services",
    element: <Children_Care_Services />,
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
  },
  {
    path: "/adhd",
    element: <ADHD />,
  },
  {
    path: "/adhd/private-assessment",
    element: <PrivateAssessment />,
  },
  {
    path: "/adhd/treatment",
    element: <Treatment />,
  },
  {
    path: "/adhd/assessment-process",
    element: <AssessmentProcess />,
  },
  {
    path: "/adhd/nhs-right-to-choose",
    element: <NhsRightToChoose />,
  },
  {
    path: "/adhd/for-professionals",
    element: <ForProfessionals />,
  },
  {
    path: "/adhd/existing-diagnosis",
    element: <ExistingDiagnosis />,
  },
  {
    path: "/adhd/faqs",
    element: <Faqs />,
  },
  {
    path: "/adhd/book",
    element: <BookAssessment />,
  },
  {
    path: "/adhd/enquiry",
    element: <Enquiry />,
  }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeadProvider>
      <RouterProvider router={router} />
    </HeadProvider>
  </StrictMode>
);
