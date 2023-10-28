import React, { useEffect } from "react";
import { GrFormClose } from "react-icons/gr";

function PopUp(props) {
  useEffect(() => {
    if (props.trigger) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
  }, [props.trigger]);

  const handleClose = () => {
    document.body.classList.remove("popup-open");
    props.setTrigger(false);
  };

  return (
    <div className={` popup  pb-14 pt-96 md:pt-0  md:py-0 ${props.trigger ? "active" : "closing"}`}>
      <div className="popup-inner shadow-2xl pb-[32px]">
        <div className="close-btn-cont">
          <button className="close-btn" onClick={handleClose}>
            <GrFormClose className="close-btn-icon" />
          </button>
        </div>
        <div className="px-[32px]">{props.children}</div>
      </div>
    </div>
  );
}

export default PopUp;
