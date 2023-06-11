import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[296px] h-[1117px] absolute left-0 top-0 bg-[#FFFFFF] shadow-[2px_0px_10px_rgba(0, 0, 0, 0.25)]">
      <h1 className="w-[119px] h-[43px] absolute left-[38px] top-[37.08px] leading-[43px] font-[800] italic text-[35.4809px]">
        LODGN
      </h1>
      <p className="w-[190px] h-[34px] absolute left-[19px] top-[146.95px] font-[600] text-[22.8024px] leading-[34px] tracking-[-0.02em] text-[#72AA83]">
        Current requests
      </p>
      <hr className="w-[249px] h-[0px] absolute left-[20px] top-[200.5px] border-black/[.29]"></hr>
      <p className="w-[158px] h-[33px] absolute left-[19px] top-[227px] font-[600] text-[22px] leading-[33px] tracking-[-0.02em] text-[#494949]">
        Ongoing stays
      </p>
      <hr className="w-[249px] h-[0px] absolute left-[20px] top-[282px] border-black/[.29]"></hr>
      <p className="w-[156px] h-[33px] absolute left-[19px] top-[306px] font-[600] text-[22px] leading-[33px] tracking-[-0.02em] text-[#494949]">
        Previous stays
      </p>
      <hr className="w-[249px] h-[0px] absolute left-[20px] top-[361.5px] border-black/[.29]"></hr>
      <p className="w-[84px] h-[33px] absolute left-[19px] top-[385px] font-[600] text-[22px] leading-[33px] tracking-[-0.02em] text-[#494949]">
        Reports
      </p>
      <hr className="w-[249px] h-[0px] absolute left-[20px] top-[442px] border-black/[.29]"></hr>
      <div className="w-[231px] h-[70px] absolute left-[29px] top-[884px] rounded-[10px] bg-gradient-to-r from-[#48AF78] to-[#42996B]">
        <p className="w-[94px] h-[33px] absolute left-[80px] top-[18px] font-[600] text-[22px] leading-[33px] tracking-[-0.05em] text-[#ffffff]">
          Log-Out
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
