import './App.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';

// Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, 
// we don't ship with any included CSS. However, some stylesheet is required to 
// use these components.
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';

import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { BsBrightnessHigh, BsBrightnessHighFill } from 'react-icons/bs';

import Calculator from './Calculator';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  console.log('App re-rendered');

  return (
    <Container className="py-3">
      <Row>
        <Col md={{ span: 6 }} lg={{ span: 5 }} className='mb-3'>
          <Form.Check
            type="switch"
            id="theme-setter"
            checked={darkTheme ? true : false}
            label={darkTheme ? <><BsBrightnessHighFill /> Dark</> : <><BsBrightnessHigh /> Light</>}
            onChange={() => setDarkTheme(!darkTheme)}
          />
        </Col>
        <Col md={{ span: 6 }} lg={{ span: 5 }}>
          <Calculator darkTheme={darkTheme} />
        </Col>
      </Row>
    </Container >
  );
}

export default App;
