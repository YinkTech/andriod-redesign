import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { TbArrowUpRight } from "react-icons/tb";
import andriodImg from "./../assets/img/heroFooter.png";

const Footer = () => {
  return (
    <div className="bg-[#f0f3f4] flex flex-col gap-[30px] pt-[40px] px-2 md:px-[60px] pb-0">
      <div className="container mx-auto flex flex-col gap-[40px] ">
        <div className="flex flex-col md:flex-row md:items-center gap-[40px]">
          <span className="font-[700] text-[16px]">Follow Us</span>
          <div className="flex items-center gap-[20px]">
            <BsTwitter />
            <BsLinkedin />
            <BsInstagram />
            <BsFacebook />
            <BsYoutube />
          </div>
        </div>
        <hr />
        <div>
          <div className="grid lg:grid-cols-4 gap-4 mx-auto pb-10">
            <div className="flex flex-col gap-[24px]">
              <h5 className="font-[500] text-[16px] text-[#202124]">
                {" "}
                Privacy & Safety{" "}
              </h5>
              <ul className="flex flex-col gap-[20px] text-[#5F6368] text-[16px] font-[400]">
                <li>
                  <a href="" className="footer-nav-li">
                    Privacy
                  </a>
                </li>
                <li>Security</li>
                <li>Physical </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h5 className="font-[500] text-[16px] text-[#202124]">
                {" "}
                Accessibility{" "}
              </h5>
              <ul className="flex flex-col gap-[20px] text-[#5F6368] text-[16px] font-[400]">
                <li>Vision features</li>
                <li>Audio features</li>
                <li>Mobility features</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h5 className="font-[500] text-[16px] text-[#202124]">
                {" "}
                More from Android{" "}
              </h5>
              <div className="flex flex-col gap-[20px] text-[#5F6368] text-[16px] font-[400]">
                <span>Android TV</span>
                <span>Transfer contacts</span>
                <span>Get The Message </span>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h5 className="font-[500] text-[16px] text-[#202124]">
                {" "}
                Support{" "}
              </h5>
              <div className="flex flex-col gap-[20px] text-[#5F6368] text-[16px] font-[400]">
                <li className="flex items-center gap-[8px]">
                  {" "}
                  Help Center <TbArrowUpRight />
                </li>
                <li className="flex items-center gap-[8px]"> File Transfer </li>
                <li className="flex items-center gap-[8px]">
                  {" "}
                  Find my device <TbArrowUpRight />
                </li>
                <li className="flex items-center gap-[8px]">
                  {" "}
                  Join user studies <TbArrowUpRight />
                </li>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h5 className="font-[500] text-[16px] text-[#202124]">
                {" "}
                For Enterprise{" "}
              </h5>
              <ul className="flex flex-col gap-[20px] text-[#5F6368] text-[16px] font-[400]">
                <li>overview</li>
                <li>Find solutions</li>
                <li> Enterprise Devices </li>
                <li> Enterprise Support </li>
                <li className="flex items-center gap-[8px]">
                  {" "}
                  Enterprise Blog <TbArrowUpRight />
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h5 className="font-[500] text-[16px] text-[#202124]">
                {" "}
                For the press{" "}
              </h5>
              <ul className="flex flex-col gap-[20px] text-[#5F6368] text-[16px] font-[400]">
                <li className="flex items-center gap-[8px]">
                  {" "}
                  Android blog <TbArrowUpRight />
                </li>
                <li className="flex items-center gap-[8px]">
                  {" "}
                  Press Corner <TbArrowUpRight />
                </li>
                <li className="flex items-center gap-[8px]">
                  {" "}
                  Contact Press team <TbArrowUpRight />
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h5 className="font-[500] text-[16px] text-[#202124]">
                {" "}
                For developers{" "}
              </h5>
              <ul className="flex flex-col gap-[20px] text-[#5F6368] text-[16px] font-[400]">
                <li className="flex items-center gap-[8px]">
                  {" "}
                  Developer Resources <TbArrowUpRight />
                </li>
                <li className="flex items-center gap-[8px]">
                  {" "}
                  Android Studio and SDK <TbArrowUpRight />
                </li>
                <li className="flex items-center gap-[8px]">
                  {" "}
                  Android Open Source Project <TbArrowUpRight />
                </li>
                <li className="flex items-center gap-[8px]">
                  {" "}
                  How Google Play works <TbArrowUpRight />
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div>
            <div className="my-9 flex flex-col lg:flex-row gap-[20px] lg:gap-[120px] justify-between items-start">
              <div className="md:text-[#000] text-[#5f6368] text-[16px]">
                <p>
                  1 Android phone required for set up. Internet connection
                  required. Available on Wear OS 3+.
                </p>
                <p>2 Available on Android 6.0+ devices. </p>
                <p>3 Available on Chrome OS version 91+ devices. </p>
                <p>
                  4 Available on 64-bit versions of Windows 10+ devices
                  (ARM-based devices not supported).{" "}
                </p>
                <p>
                  5 Devices must be within Bluetooth sharing distance and have
                  Wi-Fi enabled.{" "}
                </p>
                <p>
                  6 Based on third-party research funded by Google LLC in June
                  2022 comparing Android 12 and iOS 15. Evaluation based on
                  no-cost smartphone features enabled by default. Some features
                  may not be available in all countries.
                </p>
              </div>
              <div className=" whitespace-nowrap">
                <div className=" flex md:items-center md:flex-row flex-col gap-[24px]">
                  <div className="flex items-center gap-[8px]">
                    {" "}
                    Privacy Policy <TbArrowUpRight />
                  </div>
                  <div>
                    <div className="selectCont font-[400] flex w-[227px] lg:w-[200px] items-center justify-between">
                      <GrLanguage className="w-[14px] h-[14px] m-1 text-[16px] text-[#202124]" />
                      <select className="selectfooter w-full">
                        <option value="English">English</option>
                        <option value="English">English</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={andriodImg} className="h-[43px]" alt={andriodImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
