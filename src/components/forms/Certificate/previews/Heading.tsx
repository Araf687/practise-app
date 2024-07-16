import React from "react";

interface HeadingProps {
    reference: string;
    customize?:boolean;
}

const Heading: React.FC<HeadingProps> = ({ reference, customize }) => {
    const currentDate = new Date();
  return (
    <div>
      <h6>Date: {currentDate.toDateString()}</h6>
      <h6>
        Ref: Anfords / HR /{" "}
        {!customize ?(reference.charAt(0).toUpperCase() + reference.slice(1) + " Certificate"):reference}
      </h6>
      <p className="fs-3 text-center mt-5">
        <strong>
          <u>To whom it may concern</u>
        </strong>
      </p>
    </div>
  );
};

export default Heading;
