import React from "react";
import { LIST_JOB } from "../../../../Constants/JobData";
import JobItem from "../JobItem";

export default function JobList() {
  return (
    <div className="sp flex items-center bg-[#fffceb] bg-icon overflow-hidden flex-col">
      <div className="container px-8 flex items-center flex-col pb-12">
        <h3 className="text-[28px] pb-10 text-center md:text-[48px] font-LHanoienne pt-[40px]">
          <span className="text-[#D00000]">RENG RENG</span> tìm bạn đồng hành
        </h3>
        {LIST_JOB.map((item, index) => {
          return (
            <div className="flex gap-[20px] mb-5" key={index}>
              <JobItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}