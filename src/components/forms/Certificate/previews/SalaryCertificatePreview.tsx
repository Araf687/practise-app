import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { numberToWords } from "../../../../utils.tsx/formatting";

interface CertificateProps {
  data: any
  contentForEditor?: boolean;
}

const SalaryCertificatePreview: React.FC<CertificateProps> = ({
  data,
  contentForEditor = false,
}) => {
  const {
    name,
    designation,
   
  } = data;
  const currentDate = new Date();

  const mainContent = (
    <>
      {" "}
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
            This is to certify that Mr. <strong>{name || "{{name}}"}</strong> is
            working for us from {"{{joining_date}}"} to till date. He is
            designated as <strong>{designation || "{{designation}}"}</strong>.
            His curent compensation is Taka <strong>{"{{salary}}"}( {"{{salary in words}}"} )</strong>.
            Detailed structure is given bellow-
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
          <strong>Employee Name:</strong> {name}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Compansation paid via bank & cash:</strong> {designation}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Nominated bank:</strong> 
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <strong>Nominated bank account no:</strong>{" "}
          {/* {numberToWords(parseInt(total_advance_value))} */}
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
        <h5 className="mb-3"><u>Breaking of his compensation</u></h5>
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
                <td>22,625</td>
                <td> 22,625</td>
              </tr>
              <tr>
                <td>House Rent Allowance</td>
                <td>11,313</td>
                <td>4,525</td>
              </tr>
              <tr>
                <td>Medical Allowance</td>
                <td>11,313</td>
                <td>4,525</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td>11,313</td>
                <td>4,525</td>
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
      style={{
        width: "210mm",
        height: "297mm",
        padding: "1in",
        border: "1px solid black",
        backgroundColor: "white",
        textAlign: "justify",
      }}
      className="mt-5"
    >
      {mainContent}
    </Container>
  );
};

export default SalaryCertificatePreview;
