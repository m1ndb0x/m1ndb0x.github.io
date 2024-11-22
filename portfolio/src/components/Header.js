import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="d-flex flex-column align-items-start">
          <a href="mailto:your-email@example.com" className="mb-3 text-dark">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" className="mb-3 text-dark" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
