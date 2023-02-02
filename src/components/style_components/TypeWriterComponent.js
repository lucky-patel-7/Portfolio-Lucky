import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { aboutDetails } from "../dynamic_data/Details";

const TypeWriterComponent = () => {
  const [text] = useTypewriter({
    words: [
      aboutDetails.name,
      aboutDetails.pos1,
      aboutDetails.pos2,
      aboutDetails.pos3,
    ],
    loop: false,
  });

  return (
    <div className="name_title mt-5 pt-5">
      <span>{text}</span>
      <Cursor cursorColor="red" />
    </div>
  );
};

export default TypeWriterComponent;
