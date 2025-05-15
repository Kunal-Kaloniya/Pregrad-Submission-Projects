import React from "react";

const Footer = () => {
  return (
    <footer
      className="mt-10"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
          <h3>About Us</h3>

          <p>
            We are a team of passionate developers creating amazing web
            experiences. Our mission is to deliver high-quality and
            user-friendly solutions.
          </p>
        </div>
        <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
          <h3>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a
                href="#home"
                style={{ color: "white", textDecoration: "none" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                style={{ color: "white", textDecoration: "none" }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
          <h3>Contact Us</h3>
          <p>Email: contact@yourwebsite.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Web Street, Code City</p>
        </div>
      </div>
      <div
        style={{
          marginTop: "1rem",
          borderTop: "1px solid white",
          paddingTop: "1rem",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Created by Amogh. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
