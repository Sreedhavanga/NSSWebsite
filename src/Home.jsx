import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderImages = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Slider Section */}
      <div id="home" style={{ margin: "20px 0" }}>
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  height: "700px",
                  width: "1000px",
                  borderRadius: "10px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* NSS Aim Section */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          margin: "20px auto",
          maxWidth: "800px",
          fontFamily: "Roboto",
          backgroundColor: "#f0f0f5",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "#00004d", marginBottom: "10px" }}>NSS Aim</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.5", color: "#333" }}>
          The NSS aims to inculcate the spirit of voluntary work among students
          and contribute to the upliftment of society by involving youth in
          community service, leadership activities, and overall personality
          development.
        </p>
      </div>

      {/* Leaderboard Section */}
      <div
        style={{
          margin: "20px auto",
          padding: "20px",
          maxWidth: "800px",
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#00004d" }}>Leaderboard</h2>
        <p style={{ textAlign: "center", color: "#666" }}>
          [Placeholder for top NSS contributors. You can update this later!]
        </p>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#d9d9d9", // Ash color
          padding: "20px",
          textAlign: "center",
          fontFamily: "Roboto",
        }}
      >
        <h3 style={{ color: "#00004d", marginBottom: "10px" }}>Contact Us</h3>
        <p style={{ color: "#333", fontSize: "16px", lineHeight: "1.5" }}>
          NSS, Vasavi College of Engineering, Hyderabad <br />
          Email: nss@vasavi.ac.in <br />
          Phone: +91-1234567890
        </p>
      </footer>
    </div>
  );
};

export default Home;
