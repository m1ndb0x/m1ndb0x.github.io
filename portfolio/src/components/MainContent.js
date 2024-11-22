import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const MainContent = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-4" style={styles.name}>Michael Rourke</h1>
          <p className="lead" style={styles.description}>
          I am a Full Stack Developer with a DEC in Engineering Physics Technologies and advanced training in software development. My journey in tech has equipped me with a solid foundation in tools and languages like React.js, Java, Spring Boot, and CSS. I thrive on applying my analytical mindset to solve complex challenges and create efficient, user-centered applications.
          </p>
          <p className="lead" style={styles.description}>
          Throughout my projects, I’ve developed strong front-end and back-end skills, particularly in creating responsive interfaces with HTML5 and CSS, developing interactive components with React.js, and implementing server-side logic using Java and Spring Boot. I’m passionate about coding, continuously improving my skills, and staying updated on the latest developments in tech.
          </p>
          <p className="lead" style={styles.description}>
          I’ll be available for work starting in February 2025, and I’m excited to bring my technical skills and collaborative mindset to a team where I can contribute to meaningful projects. Problem-solving is at the core of my approach, and I thrive in environments where collaboration and idea-sharing drive innovation. I look forward to making a positive impact by enhancing efficiency and user experiences.
          </p>
          <Button
            href="/CV.pdf"
            download
            style={styles.downloadButton}
          >
            Download CV
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  name: {
    fontFamily: 'Varsity, sans-serif',
    fontSize: '5rem',
    color: '#333',
  },
  description: {
    fontFamily: 'Conthrax, sans-serif',
    fontSize: '1.2rem',
    color: '#333',
  },
  downloadButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
    background: 'linear-gradient(90deg, #010332, #100328, #29011C, #43000D, #530005)',
    border: 'none',
    borderRadius: '8px',
    transition: 'background 0.3s ease',
  },
};

export default MainContent;
