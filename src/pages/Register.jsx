import React from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import '../css/app.css'


export default function Register() {
  return (
    <div>

<Container className="form-container">
      <h2 className="form-title">Student Registration</h2>
      <Form className="form-box">

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control placeholder="Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control placeholder="Address" />
        </Form.Group>

        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Choose...">
              <option>Grade</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Choose...">
              <option>Class</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </Form.Select>
          </Form.Group>

        </Row>

        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </Container>

    </div>
  )
}
