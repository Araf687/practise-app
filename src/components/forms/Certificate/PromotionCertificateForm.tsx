import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { userData } from "../../../utils.tsx/fakedata/userData";
import { useFormik } from "formik";
import PromotionPreview from "./PromotionPreview";
import AdvanceCertificate from "./previews/AdvanceCertificatePreview";
import CheckEditor from "./CheckEditor";

interface PromotionCertificateFormProps {
  type?: string;
}

const PromotionCertificateForm: React.FC<PromotionCertificateFormProps> = ({
  type,
}) => {
  const [initialValues] = useState({
    ref: "",
    user_id: "",
    name: "",
    designation: "",
    applied_date: "",
    new_responsibility: "",
    approval_date: "",
    total_advance_value: "",
    pay_through: "",
    installment: "",
    installment_start_date: "",
    approved_by: "",
  });

  const [editCertificate, setEditCertificate] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDropdown1">
          <Form.Label>User</Form.Label>
          <Form.Control
            as="select"
            name="user_id"
            onChange={handleChangeInput}
            value={formik.values.user_id}
          >
            <option>Choose...</option>
            {userData &&
              userData.map((item: any, index: number) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleChangeInput}
            value={formik.values.name}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDropdown2">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            as="select"
            name="designation"
            onChange={handleChangeInput}
            value={formik.values.designation}
          >
            <option>Choose...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Form.Control>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formGridDate1">
          <Form.Label>Applied Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            name="applied_date"
            onChange={handleChangeInput}
            value={formik.values.applied_date}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
          <Form.Label>New Responsibility</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter new responsibility"
            name="new_responsibility"
            onChange={handleChangeInput}
            value={formik.values.new_responsibility}
          />
        </Form.Group>

        <Form.Group controlId="formGridDate2" as={Col} className="mb-3">
          <Form.Label>Approval Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            name="approval_date"
            onChange={handleChangeInput}
            value={formik.values.approval_date}
          />
        </Form.Group>

        {type === "advance" && (
          <Form.Group as={Col} controlId="formGridDropdown1">
            <Form.Label>Approved By</Form.Label>
            <Form.Control
              as="select"
              name="approved_by"
              onChange={handleChangeInput}
              value={formik.values.approved_by}
            >
              <option>Choose...</option>
              {userData &&
                userData.map((item: any, index: number) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
        )}
      </Row>

      {type === "advance" && (
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
            <Form.Label>Advance Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter advance amount"
              name="total_advance_value"
              onChange={handleChangeInput}
              value={formik.values.total_advance_value}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
            <Form.Label>Pay through</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pay through option"
              name="pay_through"
              onChange={handleChangeInput}
              value={formik.values.pay_through}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
            <Form.Label>Installment</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter installment"
              name="installment"
              onChange={handleChangeInput}
              value={formik.values.installment}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDate1">
            <Form.Label>Installment Start date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date"
              name="installment_start_date"
              onChange={handleChangeInput}
              value={formik.values.installment_start_date}
            />
          </Form.Group>
        </Row>
      )}

      <div className="text-center">
        <Button variant="primary" type="submit">
          Submit & download
        </Button>
       { !editCertificate &&<Button variant="primary" type="submit" className="ms-2" onClick={()=>setEditCertificate(true)}>
          Edit Form
        </Button>}
        {editCertificate && <Button variant="primary" type="submit" className="ms-2" onClick={()=>setEditCertificate(false)}>
          Cancel Editing
        </Button>}
      </div>

      {type === "promotion" && editCertificate ? (
        <CheckEditor
          data={
            <PromotionPreview data={formik.values}  contentForEditor={true} />
          }
        />
      ) : (
        <PromotionPreview data={formik.values} />
      )}
      {type === "advance" && <AdvanceCertificate data={formik.values} />}
    </Form>
  );
};

export default PromotionCertificateForm;
