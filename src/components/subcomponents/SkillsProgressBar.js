import React, { useState, useEffect } from "react";

const SkillProgressBar = ({ skill, percent }) => {
  const [visibility, setVisibility] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setVisibility(true);
  }, []);

  useEffect(() => {
    if (visibility) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 1000);
    }
  }, [visibility]);

  return (
    <div
      className="skill-progress-bar row d-flex"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-mirror="true"
    >
      <div className="skill-name">{skill}</div>
      <div className="progress-bar">
        <div
          className={`progress-fill ${animation ? "animate" : ""}`}
          style={{ width: `${percent}%` }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
