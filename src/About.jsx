import React from "react";

const About = () => {
  const members = [
    { name: "Member 1", phone: "123-456-7890", image: "https://via.placeholder.com/150" },
    { name: "Member 2", phone: "234-567-8901", image: "https://via.placeholder.com/150" },
    { name: "Member 3", phone: "345-678-9012", image: "https://via.placeholder.com/150" },
    { name: "Member 4", phone: "456-789-0123", image: "https://via.placeholder.com/150" },
    { name: "Member 5", phone: "567-890-1234", image: "https://via.placeholder.com/150" },
    { name: "Member 6", phone: "678-901-2345", image: "https://via.placeholder.com/150" },
    { name: "Member 7", phone: "789-012-3456", image: "https://via.placeholder.com/150" },
    { name: "Member 8", phone: "890-123-4567", image: "https://via.placeholder.com/150" },
    { name: "Member 9", phone: "901-234-5678", image: "https://via.placeholder.com/150" },
    { name: "Member 10", phone: "012-345-6789", image: "https://via.placeholder.com/150" },
    { name: "Member 11", phone: "123-456-7890", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div id="about" style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ color: "#00004d", fontFamily: "Roboto", fontWeight: "bold" }}>About</h2>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <img
          src="nss_image.jpg"
          alt="NSS Logo"
          style={{ marginRight: "20px", borderRadius: "8px" }}
        />
        <p style={{ fontSize: "22px", fontFamily: "Fira Sans" }}>
          NSS Vasavi College of Engineering is a student-driven organization committed to
          community service, development programs, and fostering leadership skills among students.
          Our mission is to promote social responsibility and holistic development. <br /><br />
          The National Service Scheme (NSS) is a program that encourages students to participate
          in community service to develop their character and personality. The NSS was launched
          in 1969 by the Ministry of Youth Affairs and Sports, Government of India. The program's
          goals include: <br />
          <ul>
            <li>Developing social and civic responsibility</li>
            <li>Understanding the community and oneself in relation to the community</li>
            <li>Identifying community needs and problems</li>
            <li>Using knowledge to find practical solutions to problems</li>
            <li>Developing leadership qualities and democratic values</li>
            <li>Practicing national integration and social harmony</li>
          </ul>
        </p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3 style={{ color: "#00004d"}}>Team Members</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {members.map((member, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={member.image}
                alt={`${member.name}`}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
              <h4>{member.name}</h4>
              <p>{member.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
