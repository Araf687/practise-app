import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { userData } from "../../../utils.tsx/fakedata/userData";
import { useFormik } from "formik";
import PromotionPreview from "./PromotionPreview";
import AdvanceCertificate from "./previews/AdvanceCertificatePreview";
import CheckEditor from "./CheckEditor";
import SalaryCertificatePreview from "./previews/SalaryCertificatePreview";

interface PromotionCertificateFormProps {
  type?: string;
}

interface UserProps {
  id: number;
  name: string;
  email: string;
  designation_id: number;
  designation_name: string;
  salary: number;
  joining_date: string; // Consider using Date type if you want to handle date objects
  bank_account: string;
  address: string;
}


const PromotionCertificateForm: React.FC<PromotionCertificateFormProps> = ({
  type,
}) => {
  const [selectedUser,setSelectedUser]=useState<UserProps>({});
  const [initialValues] = useState({
    ref: "",
    user_id: "",
    name: "",
    designation: "",
    applied_date: "",
    new_responsibility: "",
    approval_date: "",
    applicable_date: "",
    total_advance_value: "",
    pay_through: "",
    installment: "",
    installment_start_date: "",
    approved_by: "",
    basic_salary: "",
    house_rent_allowance: "",
    medical_allowance: "",
    convayance_allowance: "",
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
    console.log(e.target.name);
    if(e.target.name==='user_id'){
      const tempSelectedUser=userData.find(item=>item.id===parseInt(e.target.value));
      console.log(selectedUser)
      setSelectedUser(tempSelectedUser)
    }
  };
  console.log(type)

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
        {type === "advance" && (
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
        )}

        {type === "promotion" && (
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
        )}

        {type === "promotion" && (
          <Form.Group controlId="formGridDate2" as={Col} className="mb-3">
            <Form.Label>Applicable From</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date"
              name="applicable_date"
              onChange={handleChangeInput}
              value={formik.values.applicable_date}
            />
          </Form.Group>
        )}
        {type === "advance" && (
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
        )}

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

      {type === "salary" && (
        <Row className="mb-3">
          <h5>Salary Compensation Details</h5>
          <Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
            <Form.Label>Basic Salary</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter basic salary"
              name="basic_salary"
              onChange={handleChangeInput}
              value={formik.values.basic_salary}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
            <Form.Label>House Rent Allowance</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter house rent allowance"
              name="house_rent_allowence"
              onChange={handleChangeInput}
              value={formik.values.house_rent_allowance}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
            <Form.Label>Medical Allowance</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter medical allowance"
              name="medical_allowance"
              onChange={handleChangeInput}
              value={formik.values.medical_allowance}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDate1">
            <Form.Label>Convayance Allowance</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter convayeance allowance"
              name="convayeance_allowance"
              onChange={handleChangeInput}
              value={formik.values.convayance_allowance}
            />
          </Form.Group>
        </Row>
      )}

      <div className="text-center">
        <Button variant="primary" type="submit">
          Submit & download
        </Button>
        {!editCertificate && (
          <Button
            variant="primary"
            type="submit"
            className="ms-2"
            onClick={() => setEditCertificate(true)}
          >
            Edit Form
          </Button>
        )}
        {editCertificate && (
          <Button
            variant="primary"
            type="submit"
            className="ms-2"
            onClick={() => setEditCertificate(false)}
          >
            Cancel Editing
          </Button>
        )}
      </div>

      {type === "promotion" &&
        (editCertificate ? (
          <CheckEditor
            data={
              <PromotionPreview data={formik.values} contentForEditor={true} />
            }
          />
        ) : (
          <PromotionPreview data={formik.values} />
        ))}


      {type === "salary" &&
        (editCertificate ? (
          <CheckEditor
            data={
              <SalaryCertificatePreview
                data={formik.values}
                contentForEditor={true}
              />
            }
          />
        ) : (
          <SalaryCertificatePreview data={formik.values} />
        ))}

      {type === "advance" &&
        (editCertificate ? (
          <CheckEditor
            data={
              <AdvanceCertificate
                data={formik.values}
                contentForEditor={true}
              />
            }
          />
        ) : (
          <AdvanceCertificate data={formik.values} />
        ))}
      {/* {type === "advance" && <AdvanceCertificate data={formik.values} />} */}
    </Form>
  );
};

export default PromotionCertificateForm;
