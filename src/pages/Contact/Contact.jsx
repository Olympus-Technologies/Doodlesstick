import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import "./Contact.css"
import { Loader } from "google-maps";
import file from "../../assets/hospital.jpg"

export function Contact() {

  const [form, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  })

  const submit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }
    const body = `
Hello Doodlesstick Team,
My name is ${data.first_name} ${data.last_name}.
${data.message}
`
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      message: ""
    })
    console.log(body)
    const mailtoLink = `mailto:doodlesstick09@gmail.com?subject=${encodeURIComponent("Doodlesstick Inquiry")}&body=${encodeURIComponent(body)}`;
    const a = document.createElement('a');
    a.href = mailtoLink;
    a.target = '_blank';  // Open in a new tab
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // const load = async () => {
  //   const options = {/* todo */ };
  //   const loader = new Loader('AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg', options);

  //   const google = await loader.load();
  //   const location = { lat: 52.24048, lng: -0.902656 };
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 15,
  //     center: location,
  //   });

  //   const marker = new google.maps.Marker({
  //     position: location,
  //     map: map,
  //   });

  //   const streetViewService = new google.maps.StreetViewService();
  //   const panorama = new google.maps.StreetViewPanorama(
  //     document.getElementById("map"),
  //     {
  //       position: location,
  //       pov: {
  //         heading: 34,
  //         pitch: 10,
  //       },
  //     }
  //   );

  //   map.setStreetView(panorama);
  // }

  useEffect(() => {
    // load()
  }, [])

  return (
    <>
      <Navbar />
      <h1 className="contact-header">Contact Us</h1>
      <section className="contact-us">
        <div className="contact-container">
          <div className="left-section">
            {/* <div id="map"></div> */}
            <img src={file} style={{borderRadius: "16px", margin: "0 auto", objectFit: "cover", width: "100%", height: "100%"}}/>
          </div>

          <div className="contact-details">
            <div className="location-info">
              <h3 style={{ textAlign: "center" }}>Our Location</h3>
              <p><strong>Address:</strong> Suite G7, Moulton Park Business Centre, Redhouse Road, Northampton, NN3 6AQ.</p>
              <p><strong>Phone:</strong> <a href="tel:01604216476">01604216476</a>,
                <a href="tel:07737493075">07737493075</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@doodlesstick.com">info@doodlesstick.com</a></p>
              <p style={{ fontStyle: "italic", color: "rgb(15,92,15)" }}>Contact us for the best health care advice.
              </p>
            </div>

            <div className="feedback-form">
              <h3 style={{ textAlign: "center" }}>Leave Us a Message</h3>
              <form onSubmit={(e) => submit(e)}>
                <div className="form-group">
                  <label for="first-name">First Name:</label>
                  <input value={form.first_name} onChange={(e) => setFormData({...form, first_name: e.currentTarget.value})} type="text" id="first-name" name="first_name" required />
                </div>
                <div className="form-group">
                  <label for="last-name">Last Name:</label>
                  <input value={form.last_name} onChange={(e) => setFormData({...form, last_name: e.currentTarget.value})} type="text" id="last-name" name="last_name" required />
                </div>
                <div className="form-group">
                  <label for="email">Email:</label>
                  <input value={form.email} onChange={(e) => setFormData({...form, email: e.currentTarget.value})} type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label for="message">Your Message:</label>
                  <textarea value={form.message} onChange={(e) => setFormData({...form, message: e.currentTarget.value})} id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
