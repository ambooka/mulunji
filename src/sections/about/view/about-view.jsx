import React from 'react';
import { Container } from 'react-bootstrap';
import ContactSection from "../ContactSection";
 import OurStorySection from "../OurStorySection";

function AboutView() {
  return (
    <Container fluid className="about-section">

        <OurStorySection />
        {/*<AboutSection />*/}

        <ContactSection />

    </Container>
  );
}

export default AboutView;
