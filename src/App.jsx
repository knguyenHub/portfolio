import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'

function App() {
  return(
    <Container>
      <Row>
        <Col>
          <h1>Karen Nguyen</h1>
          <p>Aspiring Software Developer</p>
          </Col>
      </Row>
      <Row>
        <Col>
          <h1>Experience</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App
