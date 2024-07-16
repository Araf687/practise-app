import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";

function NOCPreview(props: any) {
  //   const { name, newDesignation, designationApplicableDate, jobResponsibility } =
  //     props.data;
  const currentDate = new Date();
  const {
    ref,
    noc_for,
    father_name,
    mother_name,
    joining_date,
  } = props.data;
  const { user } = props;

  const mainContent = (
    <>
      <Heading reference={`${ref} for ${noc_for}`} customize={true} />
      <p className="mt-5">
        <strong>{user?.name || "{{name}}"},</strong>
      </p>
      <p className="mt-4" style={{ textAlign: "justify" }}>
        This is to certify that <strong>{user?.name || "{{name}}"}</strong> D/O{" "}
        {father_name || "{{father_name}}"} & {mother_name || "{{mother_name}}"}.
        He has been working in our organization since{" "}
        {joining_date || "{{new joining_date}}"} to {currentDate.toDateString()}. He was a
        permanent employee of Anfords Bngladesh Ltd. SHe was holding the
        position of{" "}
        <strong>{user?.designation_name || "{{designation}}"}</strong>.During
        the tenure we found her as a hardworking, energitic employee. He has
        learned all relavent activities well
      </p>
      <p className="my-5">We wish her all the best.</p>
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

export default NOCPreview;
