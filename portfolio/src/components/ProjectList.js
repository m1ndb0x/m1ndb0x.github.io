import React, { useState } from 'react';
import { Card, Button, Offcanvas } from 'react-bootstrap';

const projects = [
  {
    name: 'Project 1',
    description: 'A brief description of Project 1.',
    link: 'https://github.com/your-repo/project1',
  },
  {
    name: 'Project 2',
    description: 'A brief description of Project 2.',
    link: 'https://github.com/your-repo/project2',
  },
];

const ProjectList = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={styles.toggleButton}>
        Projects
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={styles.sidebar}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Projects</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {projects.map((project, index) => (
            <Card key={index} style={styles.card}>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Link href={project.link} target="_blank">
                  View Project
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const styles = {
    toggleButton: {
      position: 'fixed',
      top: '50%',
      right: '0',
      zIndex: 1050,
      transform: 'translateY(-50%)',
    },
    sidebar: {
      background: 'transparent',
      animation: 'gradientBG 15s ease infinite',
    },
    card: {
      background: 'linear-gradient(-45deg, #005980, #0076a4, #1792c3, #fadabf, #fac495, #e6ad81)', // Slightly transparent white
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // 3D shadow effect
      margin: '10px 0',
      borderRadius: '10px',
    },
};

export default ProjectList;
