import React from "react";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import TrainingImg from "../../../images/healthcare_recruitment.webp";
import "./healthcare_training.css";
import Training_Products from "../../../components/training_products/training_products";
const Healthcare_Training = () => {
  return (
    <>
      <Navbar />
      <div className="care">
        <div className="care-container">
          {" "}
          <div className="care-image">
            <img src={TrainingImg} alt="Healthcare Training Image" />
            <div className="care-card">
              <h2>Healthcare Training</h2>
              <ul>
                <li>
                  We are fully accredited to provide face to face training to
                  our staff in health and social care topics including the
                  following:
                  <br />
                  <br />
                  - People Movers, moving and handling.
                  <br />
                  - First Aid, Adult Basic life support.
                  <br />
                  - COSHH Awareness
                  <br />
                  - Dementia Awareness
                  <br />
                  - Diabetes Awareness
                  <br />
                  - Effective Communication
                  <br />
                  - End of life care
                  <br />
                  - Epilepsy Awareness
                  <br />
                  - Equality and Diversity
                  <br />
                  - Fire Safety and Fire Marshall
                  <br />
                  - Food hygiene
                  <br />
                  - GDPR Awareness
                  <br />
                  - Health and safety
                  <br />
                  - Infection control
                  <br />
                  - Medication Awareness
                  <br />
                  - Mental Capacity
                  <br />
                  - Mental Health Awareness
                  <br />
                  - Nutrition and fluids
                  <br />
                  - Person centred care
                  <br />
                  - Personal and pressure care
                  <br />
                  - Prevention of falls
                  <br />
                  - Risk assessment
                  <br />
                  - Safeguarding Adult at risk
                  <br />
                  - Safeguarding Children at risk
                  <br />
                  - Stress Awareness
                  <br />
                  - Understanding your role, personal development, and duty of
                  care
                  <br />
                  - Whistle blowing
                  <br />
                  - Autism awareness
                  <br />
                  - Learning disabilities awareness
                  <br />
                  - Equality and diversity
                  <br />
                  - Professional Boundaries
                  <br />
                  - Positive behavior support
                  <br />- Person centred planning
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Training_Products />
      </div>
      <Footer />
    </>
  );
};

export default Healthcare_Training;
