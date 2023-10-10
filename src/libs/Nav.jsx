import React from "react";
import logo from "./../assets/img/logo/logo.svg";
import { BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import buttonArrow from './../assets/img/mdi_arrow-up.svg'

const Nav = () => {
  return (
    <div className="flex justify-between shadow" style={{ padding: "20px 60px", fontFamily: 'ProductSans'  }}>
      <div
        className="text-[20px] flex gap-[4px] items-center text-[#202124] font-[700] "
        style={{ fontFamily: "ProductSansBold" }}
      >
        Andriod
        <img src={logo} alt={logo} className="w-[24px] h-[12.36]" />
      </div>
      <div className="flex items-center gap-[60px]">
        <div className="flex items-center gap-[24px]">
          <div
            className="capitalize flex items-center font-[500] text-[#202124] text-[16px] gap-[4px]"
            style={{ padding: "4px 8px", fontFamily: 'ProductSans' }}
          >
            discover andriod <BsChevronDown className="font-bolder text-sm" />
          </div>
          <div
            className="capitalize flex items-center font-[500] text-[#202124] text-[16px] gap-[4px]"
            style={{ padding: "4px 8px", fontFamily: 'ProductSans' }}
          >
            Switch to Andriod <BsChevronDown className="font-bolder text-sm" />
          </div>
          <div
            className="capitalize flex items-center font-[500] text-[#202124] text-[16px] gap-[4px]"
            style={{ padding: "4px 8px", fontFamily: 'ProductSans' }}
          >
            Explore devices <BsChevronDown className="font-bolder text-sm" />
          </div>
        </div>
        <div className="flex items-center gap-[36px]">
          <BiSearch />
          <button className="bg-[#202124] flex gap-[8px] items-center " style={{borderRadius: '24px', padding: '12px 28px'}}>
            <span className="text-white font-[700] text-[16px]">Shop phones</span>
            <img src={buttonArrow} alt={buttonArrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
