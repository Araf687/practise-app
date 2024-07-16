import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { userData } from "../../../utils.tsx/fakedata/userData";
import { useFormik } from "formik";
import PromotionPreview from "./PromotionPreview";
import AdvanceCertificate from "./previews/AdvanceCertificatePreview";
import CheckEditor from "./CheckEditor";
import SalaryCertificatePreview from "./previews/SalaryCertificatePreview";
import ReleasePreview from "./previews/ReleasePreview";
import NOCPreview from "./previews/NOCPreview";

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
  bank_name: string;
 
}

const PromotionCertificateForm: React.FC<PromotionCertificateFormProps> = ({
  type,
}) => {
  const allRefs = ["promotion", "advance", "salary", "release", "NOC"];
  const [selectedUser, setSelectedUser] = useState<UserProps | undefined>();

  const [allDesignation, setAllDesignation] = useState(
    userData.map((item: any) => {
      return { id: item.designation_id, name: item.designation_name };
    })
  );
  const [initialValues] = useState({
    ref: "",
    user_id: "",
    name: "",
    new_designation: "",
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
    mother_name:"",
    father_name:"",
    noc_for:"",
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
    console.log(e.target.value);
    if (e.target.name === "user_id") {
      const tempSelectedUser = userData.find(
        (item) => item.id === parseInt(e.target.value)
      );
      if (tempSelectedUser) {
        formik.setFieldValue("name", tempSelectedUser.name);
        formik.setFieldValue("designation", tempSelectedUser.designation_id);
        setSelectedUser(tempSelectedUser);
      }
    }
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDropdown1">
          <Form.Label>Ref</Form.Label>
          <Form.Control
            as="select"
            name="ref"
            onChange={handleChangeInput}
            value={formik.values.ref}
          >
            <option>Choose...</option>
            {allRefs &&
              allRefs.map((item: string, index: number) => (
                <option key={index} value={item}>
                  {item.charAt(0).toUpperCase() +
                    item.slice(1) +
                    " Certificate"}
                </option>
              ))}
          </Form.Control>
        </Form.Group>
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
        {/* <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleChangeInput}
            value={formik.values.name}
          />
        </Form.Group> */}

        {formik.values.ref === "promotion" &&<Form.Group as={Col} controlId="formGridDropdown2">
          <Form.Label>New Designation</Form.Label>
          <Form.Control
            as="select"
            name="new_designation"
            onChange={handleChangeInput}
            value={formik.values.new_designation}
          >
            <option>Choose...</option>
            {allDesignation &&
              allDesignation.map(
                (item: { id: string; name: string }, index: number) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                )
              )}

            <option value="option2">Option 2</option>
          </Form.Control>
        </Form.Group>}
        {formik.values.ref === "NOC" && (
          <Form.Group as={Col} controlId="formGridDropdown1">
            <Form.Label>NOC For</Form.Label>
            <Form.Control
              as="select"
              name="noc_for"
              onChange={handleChangeInput}
              value={formik.values.noc_for}
            >
              <option>Choose...</option>
              {["passport", "release"].map((item: string, index: number) => (
                <option key={index} value={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        )}
      </Row>
     { formik.values.ref === "NOC" && <Row>
        <Col><Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
            <Form.Label>Fathers Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new responsibility"
              name="father_name"
              onChange={handleChangeInput}
              value={formik.values.father_name}
            />
          </Form.Group></Col>
        <Col><Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
            <Form.Label>Mothers Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new responsibility"
              name="mother_name"
              onChange={handleChangeInput}
              value={formik.values.mother_name}
            />
          </Form.Group></Col>
      </Row>}

      <Row>
        {["advance", "release"].includes(formik.values.ref) && (
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

        {formik.values.ref === "promotion" && (
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

        {["promotion", "release"].includes(formik.values.ref) && (
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
        {formik.values.ref === "advance" && (
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

        {formik.values.ref === "advance" && (
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

      {formik.values.ref === "advance" && (
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

      {formik.values.ref === "salary" && (
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
              placeholder="Enter medical allowance"
              name="house_rent_allowance"
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
          <Form.Group as={Col} controlId="formGridTextInput" className="mb-3">
            <Form.Label>Convayance Allowance</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter medical allowance"
              name="convayance_allowance"
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

      {formik.values.ref === "promotion" &&
        (editCertificate ? (
          <CheckEditor
            data={
              <PromotionPreview data={formik.values} contentForEditor={true} />
            }
          />
        ) : (
          <PromotionPreview data={formik.values} user={selectedUser} />
        ))}

      {formik.values.ref === "salary" &&
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
          <SalaryCertificatePreview data={formik.values} user={selectedUser} />
        ))}

      {formik.values.ref === "advance" &&
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
          <AdvanceCertificate data={formik.values} user={selectedUser} />
        ))}
      {formik.values.ref === "release" &&
        (editCertificate ? (
          <CheckEditor
            data={
              <ReleasePreview
                data={formik.values}
                contentForEditor={true}
              />
            }
          />
        ) : (
          <ReleasePreview data={formik.values} user={selectedUser} />
        ))}
      {formik.values.ref === "NOC" &&
        (editCertificate ? (
          <CheckEditor
            data={
              <NOCPreview
                data={formik.values}
                contentForEditor={true}
              />
            }
          />
        ) : (
          <NOCPreview data={formik.values} user={selectedUser} />
        ))}

    </Form>
  );
};

export default PromotionCertificateForm;
