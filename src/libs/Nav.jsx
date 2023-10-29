import React, { useState } from "react";
import logo from "./../assets/img/logo/logo.svg";
import { BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import buttonArrow from "./../assets/img/mdi_arrow-up.svg";
import { Spiral as Hamburger } from "hamburger-react";
import NavPopUp from "../components/NavPopUp";
import { NavMobileList } from "../components/PopLoads";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [btnPop, setBtnPop] = useState(false);
  return (
    <div
      className="flex py-[10px] px-[20px]  lg:py-[20px] lg:px-[60px] transition-all justify-between shadow"
      style={{ fontFamily: "ProductSans" }}
    >
      <NavPopUp trigger={btnPop} setTrigger={setBtnPop}>
        <NavMobileList />
      </NavPopUp>
      <div
        className="text-[20px] flex gap-[4px] items-center text-[#202124] font-[700] "
        style={{ fontFamily: "ProductSansBold" }}
      >
        Andriod
        <img src={logo} alt={logo} className="w-[24px] h-[12.36]" />
      </div>
      <div className="lg:flex hidden items-center gap-[60px]">
        <div className="flex items-center gap-[24px]">
          <div
            className="capitalize flex items-center font-[500] text-[#202124] text-[16px] gap-[4px]"
            style={{ padding: "4px 8px", fontFamily: "ProductSans" }}
          >
            discover andriod <BsChevronDown className="font-bolder text-sm" />
          </div>
          <div
            className="capitalize flex items-center font-[500] text-[#202124] text-[16px] gap-[4px]"
            style={{ padding: "4px 8px", fontFamily: "ProductSans" }}
          >
            Switch to Andriod <BsChevronDown className="font-bolder text-sm" />
          </div>
          <div
            className="capitalize flex items-center font-[500] text-[#202124] text-[16px] gap-[4px]"
            style={{ padding: "4px 8px", fontFamily: "ProductSans" }}
          >
            Explore devices <BsChevronDown className="font-bolder text-sm" />
          </div>
        </div>
        <div className="flex items-center gap-[36px]">
          <BiSearch />
          <button
            className="  btn-hover flex gap-[8px] items-center "
            style={{
              border: "2px solid #202124",
              borderRadius: "24px",
              padding: "12px 28px",
            }}
          >
            <span className="font-[700] text-[16px]">Shop phones</span>
            <img src={buttonArrow} alt={buttonArrow} />
          </button>
        </div>
      </div>
      <div className="lg:hidden flex items-center justify-center text-3xl"  onClick={() => setBtnPop(true)}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
};

export default Nav;
