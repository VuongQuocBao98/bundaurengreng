import React from "react";

export default function JobItem({ item }) {
  // console.log(item.require[0]);
  return (
    <>
      <img src={item.img} alt="" />
      <div className="flex flex-col justify-center">
        <div>
          <h4 className="font-LHanoienne">{item.title}</h4>
          <p className="font-Montser">{item.des}</p>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className="font-LHanoienne pb-3">Yêu Cầu:</p>
            {item.require.map((item, index) => {
              return (
                <p className="font-Montser" key={index}>
                  * {item}
                </p>
              );
            })}
          </div>
          <div className="flex justify-center items-center w-[40%] md:w-[20%] relative">
            <img
              src="/images/icons/btn.png"
              className="cursor-pointer"
              alt="btn"
            />
            <p className="font-LHanoienne text-center items-center flex justify-center absolute cursor-pointer">
              Ứng Tuyển
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
