import React from "react";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import DomiciliaryImg from "../../../images/domiciliary_care.webp";
import "./domiciliary_care.css";

const Domiciliary_Care = () => {
  return (
    <>
      <Navbar />
      <div className="care">
        <div className="care-container">
          <div className="care-image">
            <img src={DomiciliaryImg} className="object-cover object-top" alt="Domiciliary Care Image" />
            <div className="care-card">
              <h2>Domiciliary Care</h2>
              <ul>
                <li>
                  Doodles Stick Limited provides specialist home care services
                  to people of all adult ages within the areas of
                  Northamptonshire, Milton Keynes, Bedfordshire, Leicestershire,
                  Buckinghamshire, and surrounding areas.
                </li>
                <li>
                  We have experience supporting people with different health and
                  social care needs including learning disabilities, autism,
                  mental illness, dementia, sensory impairment, physical
                  disabilities, and more.
                </li>
                <li>
                  We develop personalized support packages, which can be provided
                  from a few hours a day to 24 hours round-the-clock support.
                </li>
                <li>
                  Our service users are encouraged to maximize their abilities
                  and live as independently as much as possible within the
                  community. Services we provide include:
                  <br />
                  <br />
                  - Personal care: oral care, continence care, grooming
                  <br />
                  - Healthcare regime and medications
                  <br />
                  - Community engagement and activities
                  <br />
                  - Domestic activities: shopping, cleaning, and laundry
                  <br />
                  - Financial management support
                  <br />- Educational and vocational activities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Domiciliary_Care;
