import React from "react";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import ChildrenImg from "../../../images/children_care.webp";
import "./children_care_services.css";

const Children_Care_Services = () => {
  return (
    <>
      <Navbar />
      <div className="care">
        <div className="care-container">
          <div className="care-image">
            <img src={ChildrenImg} className="object-cover object-top" alt="Children Care Image" />
            <div className="care-card">
              <h2>Children Care Services</h2>
              <h3 class="text-stone-100">Therapeutic Residential/Supported living Care for Children and Young People Aged 8–18</h3>
              <ul>
                <li>
                At Doodles Stick, we are dedicated to providing a safe, nurturing, and 
                therapeutic home environment for children and young people aged 8 to 18. 
                Our long-term residential placements are designed to support individuals with autism 
                spectrum disorder, learning disabilities, mental health challenges, 
                and complex sensory needs.

                We believe every child deserves a place where they feel understood, supported, 
                and empowered to grow. Our approach combines therapeutic care with individualized support plans, 
                ensuring each young person can develop at their own pace and in their own way.
                </li>
                <b>What we offer</b>                
                <li>
                Therapeutic Residential Placements
                    <br />
                    - Warm, stable homes that prioritize emotional wellbeing and developmental needs.
                    
                </li>
                <li>
                Specialist Support for Autism & Sensory Needs
                    <br />
                    - Environments tailored to meet the unique sensory and communication needs of young people with ASD.
                    
                </li>
                <li>
                Holistic Mental Health Support
                    <br />
                    - A trauma-informed approach, led by experienced staff and supported by professionals.
                    
                </li>
                <li>
                Educational and Life Skills Development
                    <br />
                    - Empowering young people to achieve independence, confidence, and a brighter future.
                    
                </li>
              </ul>
              <h3 class="text-stone-100">
              Our Commitment
                At Doodles Stick, we are more than just a care provider — we are a family. 
                Every young person is valued, respected, and supported to reach their full potential. 
                We work closely with families, local authorities, educators, and healthcare professionals to create 
                an environment of trust, safety, and opportunity.
              </h3>
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Children_Care_Services;
