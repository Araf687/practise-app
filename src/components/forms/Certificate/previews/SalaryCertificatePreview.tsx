import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { numberToWords } from "../../../../utils.tsx/formatting";

export interface User {
  id: number;
  name: string;
  email: string;
  designation_id: number;
  designation_name: string;
  salary: number;
  joining_date: string;
  bank_account: string;
  address: string;
  bank_name:string;
}

interface CertificateProps {
  data: any;
  contentForEditor?: boolean;
  user?:User
}

const SalaryCertificatePreview: React.FC<CertificateProps> = ({
  data,
  contentForEditor = false,
  user
}) => {
  const {
    name,
    designation,
    basic_salary,
    house_rent_allowance,
    medical_allowance,
    convayance_allowance,
  } = data;
  const currentDate = new Date();

  const mainContent = (
    <>
      <Row className="mb-4">
        <Col>
          <h6>Date: {currentDate.toDateString()}</h6>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <u>
            <h5>TO WHOMSOEVER IT MAY CONCERN</h5>
          </u>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p>
            This is to certify that Mr. <strong>{user?.name || "{{name}}"}</strong> is
            working for us from <strong>{user?.joining_date || "{{joining_date}}"}</strong> to till date. He is
            designated as <strong>{user?.designation_name || "{{designation}}"}</strong>.
            His curent compensation is Taka{" "}
            <strong>
              {(user?.salary)?.toLocaleString() || "{{salary}}"} ({" "}
              {user?.name 
                ? numberToWords(user?.salary )
                : "{{salary in words}}"}{" "}
              )
            </strong>
            . Detailed structure is given bellow-
          </p>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <u>
            <h5>Compensation structure details</h5>
          </u>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Employee Name:</strong>
        </Col>
        <Col>: {user?.name}</Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Compansation paid via bank & cash</strong>{" "}
        </Col>
        <Col>
          :{" "}
          {(user?.salary)?.toLocaleString()|| 0}{" "}
          taka
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Nominated bank</strong>
        </Col>
        <Col>: {user?.bank_name}</Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <strong>Nominated bank account no</strong>{" "}
        </Col>
        <Col>: {user?.bank_account}</Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h5 className="mb-3">
            <u>Breaking of his compensation</u>
          </h5>
          <Table bordered>
            <thead>
              <tr>
                <th>Particulars</th>
                <th>Per Month (Taka)</th>
                <th>Per Year (Taka)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Salary</td>
                <td>{basic_salary.toLocaleString() || 0}</td>
                <td> {(basic_salary * 12).toLocaleString()}</td>
              </tr>
              <tr>
                <td>House Rent Allowance</td>
                <td>{house_rent_allowance.toLocaleString() || 0}</td>
                <td>{(house_rent_allowance * 12).toLocaleString()}</td>
              </tr>
              <tr>
                <td>Medical Allowance</td>
                <td>{medical_allowance.toLocaleString() || 0}</td>
                <td>{(medical_allowance * 12).toLocaleString()}</td>
              </tr>
              <tr>
                <td>Convayance Allowance</td>
                <td>{convayance_allowance.toLocaleString() || 0}</td>
                <td>{(convayance_allowance * 12).toLocaleString()}</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  {(
                    basic_salary +
                    house_rent_allowance +
                    medical_allowance +
                    convayance_allowance
                  ).toLocaleString()}
                </td>
                <td>
                  {(
                    (basic_salary +
                      house_rent_allowance +
                      medical_allowance +
                      convayance_allowance) *
                    12
                  ).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>
            Besides this salary he enjoying yearly 2 festible bonus (50% of
            Gross Salary), mobile connection facility, travel alowance & others
            allowances as per company policy.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>Thanking you,</p>
          <p>Anfords Bangladesh Ltd.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>Abu Khayer</p>
          <p>Head of H.R. Department</p>
        </Col>
      </Row>
    </>
  );

  if (contentForEditor) {
    return mainContent;
  }
  return (
    <Container
    className="container border bg-white"
    style={{
      width: "8.5in",
      height: "11in",
      margin: "20px auto",
      padding: "1in",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    }}
    >
      {mainContent}
    </Container>
  );
};

export default SalaryCertificatePreview;
