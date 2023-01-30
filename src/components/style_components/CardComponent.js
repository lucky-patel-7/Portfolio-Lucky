import React from "react";

const CardComponent = (props) => {
  return (
    <>
      <div class="col-xl-6 col-sm-12 mb-5 mx-3 p-1">
        <div class="bg-grey rounded-4 shadow-lg py-2 px-2  text-center">
          <img
            src={props.companyLogo}
            alt=""
            width="100"
            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-lg"
          />
          <h5 class="mb-0 text-dark">{props.companyName}</h5>
          <span class="small text-white text-uppercase ">{props.position}</span>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
