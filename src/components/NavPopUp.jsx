import React, { useEffect } from "react";
import { GrFormClose } from "react-icons/gr";
import logo from "./../assets/img/logo/popLogo.webp";

function NavPopUp(props) {
  useEffect(() => {
    if (props.trigger) {
      document.body.classList.add("Navpopup-open");
    } else {
      document.body.classList.remove("Navpopup-open");
    }
  }, [props.trigger]);

  const handleClose = () => {
    document.body.classList.remove("Navpopup-open");
    props.setTrigger(false);
  };

  return (
    <div className={` Navpopup ${props.trigger ? "active" : "closing"}`}>
      <div className="Navpopup-inner flex flex-col ">
        <div className="Navclose-btn-cont">
      <div
        className="text-[#202124] font-[700] "
        style={{ fontFamily: "ProductSansBold" }}
      >
        <img src={logo} alt={logo} className="w-[104px] h-[18.36]" />
      </div>
          <button className="close-btn" onClick={handleClose}>
            <GrFormClose className="close-btn-icon" />
          </button>
        </div>
        <div className="px-[32px] h-full">{props.children}</div>
      </div>
    </div>
  );
}

export default NavPopUp;
