import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import businessPlans from "../../images/businessPlans.webp";
import contratcInformation from "../../images/contratcInformation.webp";
import cqc_genops from "../../images/cqc&genops.webp";
import cqcImage from "../../images/cqc.webp";
import cqcFinancial from "../../images/cqcFinancial.webp";
import cqcInterview from "../../images/cqcInterview.webp";
import cqcKloe from "../../images/cqcKloe.webp";
import mockInspections from "../../images/mockInspections.webp";
import operatingFormats from "../../images/operatingFormats.webp";
import relevantBespoke from "../../images/relevantBespoke.webp";
import "./Bookings.css";

const Bookings = () => {
  const navigate = useNavigate();

  const bookingCardsData = [
    {
      image: cqcImage,
      title: "Registration with CQC",
      hours: "1hr",
      contact: "Contact Admin",
    },
    {
      image: cqc_genops,
      title: "Policies & procedures (CQC & Gen Ops)",
      hours: "1hr",
      contact: "Contact Admin",
    },
    {
      image: businessPlans,
      title: "Business Plans",
      hours: "1hr",
      contact: "Contact Admin",
    },
    {
      image: cqcInterview,
      title: "CQC Interview Preparation",
      hours: "1hr",
      contact: "Contact Admin",
    },
    {
      image: operatingFormats,
      title: "Operating Formats & Templates",
      hours: "1hr",
      contact: "Contact Admin",
    },
    {
      image: mockInspections,
      title: "Mock Inspection & Compliance Audits",
      hours: "1hr",
      contact: "Contact Admin",
    },
    {
      image: cqcKloe,
      title: "CQC KLOE Statements",
      hours: "1hr",
      contact: "Contact Admin",
    },
    {
      image: cqcFinancial,
      title: "CQC Financial Viability",
      hours: "1hr",
      contact: "Contact Admin",
    },
    {
      image: relevantBespoke,
      title: "Relevant Bespoke Support",
      hours: "1hr",
      contact: "Contact Admin",
    },
    {
      image: contratcInformation,
      title: "Contract Information",
      hours: "1hr",
      contact: "Contact Admin",
    },
  ];

  useEffect(() => {
    document.title = "Doodlessticks - Book healthcare service";
  }, []);

  // Function to create a booking card
  const createBookingCard = (data) => (
    <div className="booking-card" key={data.title}>
      <img src={data.image} alt="Session" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{data.title}</h3>
        <p className="card-hours">{data.hours}</p>
        {data.contact && <p className="card-contact">{data.contact}</p>}
        <button
          className="book-now-button"
          onClick={() => navigate("/contact-us")}
        >
          Book Now
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="booking-section--booking-page">
        <h2 className="booking-header">Book Online</h2>
        <div className="booking-cards">
          {bookingCardsData.map(createBookingCard)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bookings;
