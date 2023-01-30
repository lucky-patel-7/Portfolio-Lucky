import React from "react";

const ImageComponent = (props) => {
  return (
    <>
      <img
        src={props.languageIcon}
        alt=""
        width="100"
        class="img-fluid rounded"
      />
    </>
  );
};

export default ImageComponent;
