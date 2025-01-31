import React from "react";
import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";

const Footers = () => {
  return (
    <Box style={{ textAlign: "right" }}>
      <Container>
        <Row>
          <Column style={{ textAlign: "center" }}>
            <Heading>About Us</Heading>
            <p style={{ textAlign: "left" }}>Provide high-quality services to our customers. Exceed customer expectations by delivering innovative solutions and fostering long-term relationships. Join us on our journey as we strive for excellence in everything we do.</p>
          </Column>
          <Column style={{ textAlign: "center" }}>
            <Heading>Contact Us</Heading>
            <FooterLink href="mailto:info@example.com">info@example.com</FooterLink>
            <FooterLink href="https://www.example.com">www.example.com</FooterLink>
            <FooterLink href="tel:+1234567890">+1 (234) 567-890</FooterLink>
          </Column>
          <Column style={{ textAlign: "center" }}>
            <Heading>Social Media</Heading>
            {/* Facebook */}
            <FooterLink href="#">
              <i className="fab fa-facebook-f"></i>
              <span style={{ padding: "10px" }}>Facebook</span>
            </FooterLink>
            {/* Instagram */}
            <FooterLink href="#">
              <i className="fab fa-instagram"></i>
              <span style={{ marginLeft: "10px", padding: "10px" }}>Instagram</span>
            </FooterLink>
            {/* Whatsapp */}
            <FooterLink href="#">
              <i className="fab fa-whatsapp"></i>
              <span style={{ marginLeft: "10px", padding: "10px" }}>WhatsApp</span>
            </FooterLink>
            {/* YouTube */}
            <FooterLink href="#">
              <i className="fab fa-youtube"></i>
              <span style={{ marginLeft: "10px", padding: "10px" }}>Youtube</span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footers;
