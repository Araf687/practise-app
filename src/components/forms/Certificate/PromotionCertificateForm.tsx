

import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';



const PromotionCertificateForm: React.FC = () => {
  const [startDate1, setStartDate1] = useState<Date | null>(null);
  const [startDate2, setStartDate2] = useState<Date | null>(null);
  const [name, setName] = useState<string>('');
  const [dropdown1, setDropdown1] = useState<string>('');
  const [dropdown2, setDropdown2] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      dropdown1,
      startDate1,
      name,
      dropdown2,
      textInput,
      startDate2,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDropdown1">
          <Form.Label>Select Dropdown 1</Form.Label>
          <Form.Control
            as="select"
            value={dropdown1}
            onChange={(e) => setDropdown1(e.target.value)}
          >
            <option>Choose...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDate1">
          <Form.Label>Date Picker 1</Form.Label>
          <Form.Control
          type="date"
          placeholder="Enter text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      

        <Form.Group as={Col} controlId="formGridDropdown2">
          <Form.Label>Select Dropdown 2</Form.Label>
          <Form.Control
            as="select"
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
          >
            <option>Choose...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
        <Form.Label>Text Input</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formGridDate2" as={Col} className="mb-3">
        <Form.Label>Date Picker 2</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </Form.Group>
      </Row>

    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default PromotionCertificateForm;
