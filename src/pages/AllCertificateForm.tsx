import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PromotionCertificateForm from "../components/forms/Certificate/PromotionCertificateForm";
import PromotionPreview from "../components/forms/Certificate/PromotionPreview";

function AllCertificateForm() {
  return (
    <Tabs
      defaultActiveKey="promotion_certificate"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="promotion_certificate" title="Promotion">
        <div className="px-5">
          <PromotionCertificateForm type={"promotion"}/>
        </div>
      </Tab>
      <Tab eventKey="advance" title="Advance">
        <div className="px-5">
          <PromotionCertificateForm type={"advance"}/>
        </div>
      </Tab>
      <Tab eventKey="salary" title="Salary">
        Tab content for Loooonger Tab
      </Tab>
      <Tab
        eventKey="salary_for_credit_card"
        title="Salary for Credit Card"
        disabled
      >
        Tab content for Contact
      </Tab>
      <Tab eventKey="salary_for_tax" title="Salary for Tax" disabled>
        Tab content for Contact
      </Tab>
      <Tab eventKey="release_letter" title="Release Letter" disabled>
        Tab content for Contact
      </Tab>
      <Tab eventKey="noc" title="NOC" disabled>
        Tab content for Contact
      </Tab>
      <Tab eventKey="noc_passport" title="NOC Passport" disabled>
        Tab content for Contact
      </Tab>
      <Tab eventKey="noc_release" title="NOC Release" disabled>
        Tab content for Contact
      </Tab>
      <Tab eventKey="experience_letter" title="Experience Letter" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default AllCertificateForm;
