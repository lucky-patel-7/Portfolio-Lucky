import React from "react";

const ImageComponent = (props) => {
  return (
    <>
      <img
        src={props.languageIcon}
        alt=""
        width="100"
        className="img-fluid rounded mt-4 mt-sm-0"
      />
    </>
  );
};

export default ImageComponent;
