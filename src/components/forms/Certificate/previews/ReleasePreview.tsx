import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";

function ReleasePreview(props: any) {
  //   const { name, newDesignation, designationApplicableDate, jobResponsibility } =
  //     props.data;

  const { ref, applicable_date, applied_date } = props.data;
  const { user } = props;

  const mainContent = (
    <>
      <Heading reference={ref} />
      <p className="mt-5">Dear {user?.name || "{{name}}"},</p>
      <p className="mt-4" style={{ textAlign: "justify" }}>
        In response to your resignation letter dated{" "}
        {applied_date || "{{applied_date}}"}. We hereby accept your resignation
        from your respectable service as{" "}
        <strong>{user?.designation_name || "{{designation}}"}</strong>. With
        effect from {applicable_date || "{{applicable_date}}"}.Please note that
        as par our concern you have been setteled with our all dues.
      </p>
      <p className="mt-3 mb-4">
        Thanking You for the active, honest and valuable service rendered during
        your tenure since {user?.joining_date || "{{ joining_date}}"}.
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

export default ReleasePreview;
