import React, { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-comment-medical",
      title: "Supported Living",
      description1:
        "At Doodles Stick Limited, we provide supported living services that give people choice, respect, independence, and quality of life. We believe people have the right to live the life they choose for themselves in their own homes, with their own tenancies.",
      description2:
        "We ensure that people feel safe in their environment, people get the right support that will enable them to fulfil life aspirations and successfully live within the community.",
      link: "/supported-living",
    },
    {
      icon: "fa-solid fa-user-nurse",
      title: "Domiciliary Care",
      description1:
        "Doodles Stick Limited provides specialist home care services to people of all adult ages within the areas of Northampton shire, Milton Keynes, Bedfordshire, Leicestershire, Buckinghamshire, and surrounding areas.",
      description2:
        "We have experience supporting people of different health and social care needs including learning disabilities, autism, mental illness, dementia, sensory impairment, physical disabilities and more.",
      link: "/domiciliary-care",
    },
    {
      icon: "fa-regular fa-clock",
      title: "Live-in Care/24hrs",
      description1:
        "We provide bespoke and carefully structured care that ensures that service users’ needs are met in their own home. It is a popular alternative to residential care.",
      description2:
        "The services included in live-in care is not limited to a set of duties, task, and responsibilities, but tailored to meet everyone's needs.",
      link: "/live-in-care",
    },
    {
      icon: "fa-solid fa-id-card-clip",
      title: "Healthcare Recruitment",
      description1:
        "We recruit a wide range of healthcare professionals who are then placed with other care facilities to work as permanent, contract or temporary agency staffing basis.",
      description2:
        "We recruit: Healthcare Assistants, Support workers, Nurses, etc.",
      link: "/healthcare-recruitment",
    },
    {
      icon: "fa-solid fa-laptop-medical",
      title: "Healthcare Business Consultancy",
      description1:
        "We are subject matter experts in the industry and as a result we are happy to support others in their healthcare business projects.",
      description2: "",
      link: "/healthcare-business-consultation",
    },
    {
      icon: "fa-solid fa-book-medical",
      title: "Healthcare Training",
      description1:
        "We are fully accredited to provide face to face training to our staff in health and social care topics including the following: People Movers, moving and handling, First Aid, Adult Basic life support, COSHH Awareness, Dementia Awareness, Diabetes Awareness",
      description2: "",
      link: "/healthcare-training",
    },
  ];

  useEffect(() => {
    document.title = "Doodlessticks provides wide variety of health care service "
  }, [])

  return (
    <>
      <Navbar />
      <div id="services">
        <h2 className="section-header">Our Services</h2>
        <div className="services-container" id="servicesContainer">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">
                <i className={`fa ${service.icon}`}></i>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description1}</p>
                {service.description2 && (
                  <p className="service-description">{service.description2}</p>
                )}
                <a className="read-more-btn" href={service.link}>
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
