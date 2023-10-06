import React from "react";

const Flipcards = (props) => {
  return (
    <>
      <div className="flipcard">{props.description}</div>
      <div className="backcard">{props.answer}</div>
    </>
  );
};

export default Flipcards;
//style="background-color:{props.difficult}"
