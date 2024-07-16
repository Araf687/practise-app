import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./previews/Heading";

function PromotionPreview(props: any) {
  //   const { name, newDesignation, designationApplicableDate, jobResponsibility } =
  //     props.data;
  const currentDate = new Date();
  const { ref, name, new_designation, applicable_date, new_responsibility } =
    props.data;
    const {user}=props

  const mainContent = (
    <>
      <Heading reference={ref} />
      <p className="mt-5">
        <strong>{user?.name || "{{name}}"},</strong>
      </p>
      <p className="mt-4" style={{ textAlign: "justify" }}>
        Thank you for joining us and providing services to improve our business.
        We are pleased to inform you that the company is satisfied with your
        performance. Based on your service, the company has decided to promote
        you. You are now designated as{" "}
        <strong>{new_designation || "{{new designation}}"}</strong>. This will be
        applicable from{" "}
        {applicable_date || <strong>{"{{applicable_date}}"}</strong>}. Your new
        job responsibility is{" "}
        {new_responsibility || <strong>{"{{new_responsibility}}"}</strong>}.
        Please continue to contribute to the company's success, and we will
        ensure your satisfaction.
      </p>
      <p className="my-5">Thanking You</p>
    </>
  );

  if (props.contentForEditor == true) {
    return mainContent;
  }
  return (
    <div
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
    </div>
  );
}

export default PromotionPreview;
