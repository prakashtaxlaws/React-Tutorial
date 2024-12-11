import React from "react";
import SkillList from "./SkillList";
import Image from "./Image";
import Intro from "./Intro";

export default function Profile() {
  return (
    <>
      <div className="card">
        <Image />
        <div className="data">
            <Intro/>
<SkillList/>
        </div>
      </div>
    </>
  );
}
