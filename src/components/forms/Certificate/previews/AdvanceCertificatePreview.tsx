import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { numberToWords } from "../../../../utils.tsx/formatting";
import Heading from "./Heading";
import { User } from "./SalaryCertificatePreview";

interface CertificateProps {
  data: {
    ref: string;
    applied_date: string;
    name: string;
    new_designation: string;
    total_advance_value: string;
    pay_through: string;
    installment: string;
    installment_start_date: string;
    approval_date: string; // Ensure this matches the field in your form
  };
  contentForEditor?: boolean;
  user?:User
}

const AdvanceCertificate: React.FC<CertificateProps> = ({
  data,
  contentForEditor = false,
  user
}) => {
  const {
    ref,
    name,
    total_advance_value,
    pay_through,
    installment,
    installment_start_date,
    approval_date,
    applied_date,
  } = data;
  const currentDate = new Date();

  const mainContent = (
    <>
      {" "}
      <Row className="mb-4">
        <Col>
          <Heading reference={ref} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p>
            This is to certify that Mr. <strong>{user?.name || "{{name}}"}</strong> is
            working for us from 3rd of March to till date. He is designated as{" "}
            <strong>{user?.designation_name || "{{designation}}"}</strong>. He applied for
            a salary advance of Taka.{" "}
            <strong>
              {total_advance_value || "{{total advance amount}}"} (
              {total_advance_value
                ? numberToWords(parseInt(total_advance_value)) + " Taka"
                : " {{In words}} "}
              )
            </strong>{" "}
            on{" "}
            <strong>{applied_date ? applied_date : "{{applied date}}"}</strong>.
            Against his application the company was satisfied to pay him the
            amount he desires as a salary advance under some conditions. Please
            note down the below mentioned information as the main condition.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <u>
            <h5>Advance Structure & Installment details</h5>
          </u>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Name:</strong> {name}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Designation:</strong> {user?.designation_name}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Total Advance:</strong> Tk. {total_advance_value}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>In Words:</strong>{" "}
          {numberToWords(parseInt(total_advance_value))}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Pay through:</strong> {pay_through}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Paid On:</strong> {approval_date}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Installment:</strong> {installment} Per month
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Installment Start:</strong> {installment_start_date}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>
            Please be informed that as the installments were fixed by mutual
            agreement between the honorable managing director and the above
            mentioned employee, they may change in the future if further
            discussions take place between the organization and the relevant
            employee regarding advance installment. Also note that the employee
            is committed to pay back any remaining balance (if any) of his
            advance before discontinuation from the organization.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>For,</p>
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
        // height: "11in",
        margin: "20px auto",
        padding: "1in",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        fontSize:"14px",
        textAlign:"justify"
      }}
    >
      {mainContent}
    </Container>
  );
};

export default AdvanceCertificate;
