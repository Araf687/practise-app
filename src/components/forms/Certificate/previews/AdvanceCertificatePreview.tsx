import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { numberToWords } from "../../../../utils.tsx/formatting";

interface CertificateProps {
  data: {
    name: string;
    designation: string;
    total_advance_value: string;
    totalAdvanceInWords: string;
    pay_through: string;
    paidOn: string;
    installment: string;
    installment_start_date: string;
  };
}

const AdvanceCertificate: React.FC<CertificateProps> = ({ data }) => {
  const {
    name,
    designation,
    total_advance_value,
    totalAdvanceInWords,
    pay_through,
    paidOn,
    installment,
    installment_start_date,
  } = data;
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
    >
      <Row className="mb-4">
        <Col className="text-center">
          <h5>Date: 14.10.2021</h5>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="text-center">
          <u><h4>TO WHOMSOEVER IT MAY CONCERN</h4></u>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p>
            This is to certify that Mr. {name} is working for us from 3rd of
            March to till date. He is designated as {designation}. He applied
            for a salary advance of Taka. {total_advance_value} (
            {numberToWords(parseInt(total_advance_value))} Taka) on 9th August, 2020. Against his application
            the company was satisfied to pay him the amount he desire as salary
            advance in some conditions. Please note down the below mentioned
            information as the main condition.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <u><h5>Advance Structure & Installment details</h5></u>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Name:</strong> {name}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <strong>Designation:</strong> {designation}
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
          <strong>Paid On:</strong> {paidOn}
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
            Please be informed that as the installment were fixed by the equal
            discussion of the honorable managing director and the above
            mentioned employee so it might be change in future if any further
            discussion takes place among the organization and the relevant
            employee regarding advance installment. Please also note down that
            he is committed to pay back the balance amount (if any) of his
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
    </Container>
  );
};

export default AdvanceCertificate;
