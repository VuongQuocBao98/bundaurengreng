import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div className="bg-[#200F06]">
      <div className="container mx-auto flex flex-col justify-center items-center px-8 pb-0 md:pb-[45px]">
        <div className="flex mt-[60px] mb-[60px] w-full justify-center gap-[5px] md:gap-[40px]">
          <input
            type="text"
            className="flex w-[70%] py-2 md:px-10 px-1 md:text-[16px] text-[8px] text-gray-900 border font-Montser border-[#FDDE45] rounded-lg bg-[#FFFADE] sm:text-md focus:ring-[#FDDE45] focus:border-[#FDDE45] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FDDE45] dark:focus:border-[#FDDE45]"
            placeholder="Nhập email để được nhận thông tin khuyến mãi"
          />
          <div className="flex justify-center items-center w-[30%] md:w-[20%] relative">
            <img
              src="/images/icons/btn.png"
              className="cursor-pointer"
              alt="btn"
            />
            <p className="font-LHanoienne text-center items-center flex justify-center absolute cursor-pointer">
              Gửi ĐI
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 pb-[80px] gap-8 w-full">
          {/* footer info  */}
          <div className="md:col-span-1 col-span-3 flex flex-col pl-[20px]">
            <h3 className="font-LHanoienne text-[#FFFCEB] text-[24px] pb-[20px]">
              BÚN ĐẬU RENG RENG
            </h3>
            <p className="font-Montser text-[#FFFCEB] max-w-[380px]">
              <span className="text-[#FDDE45] font-bold ">Địa Chỉ:</span> 91
              Xuân Thuỷ, phường Thảo Điền, quận 2, TP. Hồ Chí Minh
            </p>
            <p className="font-Montser text-[#FFFCEB]">
              <span className="text-[#FDDE45] font-bold">Điện Thoại:</span>{" "}
              (028) 35355775
            </p>
            <p className="font-Montser text-[#FFFCEB]">
              <span className="text-[#FDDE45] font-bold">Email:</span>{" "}
              info@dauhomemade.com
            </p>
          </div>

          {/* footer icon  */}
          <div className="md:col-span-1 col-span-3 flex justify-center">
            <img src="/images/icons/footer-logo.png" alt="ft-icon" />
          </div>
          {/* footer  social */}
          <div className="md:col-span-1 col-span-3 flex flex-col">
            <div className="flex justify-between gap-1 md:gap-6 max-w-[400px] pb-5">
              <p className="font-LHanoienne text-[#FFFCEB] text-[20px] md:text-[24px] underline cursor-pointer">
                MENU
              </p>
              <p className="font-LHanoienne text-[#FFFCEB] text-[20px] md:text-[24px] underline cursor-pointer">
                TIN tức
              </p>
              <p className="font-LHanoienne text-[#FFFCEB] text-[20px] md:text-[24px] underline cursor-pointer">
                liên hệ
              </p>
            </div>
            <div>
              <p className="font-LHanoienne text-[#FFFCEB] text-center md:text-start text-[24px] cursor-pointer">
                KÊT NỐI VỚI CHÚNG TÔI
              </p>
              <div className="flex pt-5 gap-5 md:justify-start justify-center">
                <img
                  src="/images/icons/fb.png"
                  className="cursor-pointer hover:scale-[1.1]"
                  alt="fb"
                />
                <img
                  src="/images/icons/ins.png"
                  className="cursor-pointer hover:scale-[1.1]"
                  alt="ins"
                />
                <img
                  src="/images/icons/youtube.png"
                  className="cursor-pointer hover:scale-[1.1]"
                  alt="yt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
