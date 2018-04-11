import React from "react";
import "../styles/FullyResponsive.css";

const FullyResponsive = () => {
  return (
    <section id="fullyResponsive" className="FullyResponsive">
      <div className="FullyResponsive_left">
        <div className="FullyResponsive_phone FullyResponsive_leftPhone">
          <img src="./img/left-phone.png" alt="Left Phone" />
        </div>
        <div className="FullyResponsive_phone FullyResponsive_rightPhone">
          <img src="./img/right-phone.png" alt="Right Phone" />
        </div>
      </div>
      <div className="FullyResponsive_right">
        <div className="FullyResponsive_wrapper">
          <h2>Fully Responsive</h2>
          <p>
            Eum cu tantas legere complectitur, hinc utamur ea eam. Lorem ipsum
            dolor sit amet, volumus temporibus definitionem id ius, vel ut magna
            timeam appareat, movet timeam maiorum an ius. Sea libris dictas
            lucilius et. Ne cibo urbanitas pri, qui ad populo accusamus. Quod
            congue ea ius, nisl aperiri sit ut.
          </p>
          <a href="" className="actionButton">
            Order me one
          </a>
        </div>
      </div>
    </section>
  );
};

export default FullyResponsive;
