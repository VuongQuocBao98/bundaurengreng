import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BackToTop from "../../Components/BackToTop";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { LIST_NEWS } from "../../Constants/NewData";
export default function Detail() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState({});
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const subStr = String(location.pathname).substring(
      String(location.pathname).length - 1,
      String(location.pathname).length
    );

    const idData = LIST_NEWS.filter((name) => name.id === Number(subStr));
    setSelectedItem(idData[0]);
  }, [location]);
  return (
    <>
      <Header />
      <div className="sp flex items-center bg-[#fffceb] bg-icon overflow-hidden flex-col">
        <div className="container mx-auto grid grid-cols-3 gap-5 md:px-16 xl:px-16">
          <div className="font-Montser md:col-span-2 col-span-3 py-[30px] md:py-[60px] md:px-0 px-6 flex flex-col">
            <div className="flex gap-4 justify-start md:pb-6 pb-4">
              <div className="flex justify-center items-center relative">
                <img
                  src="/images/icons/btn-new.png"
                  className="cursor-pointer"
                  alt="btn"
                />
                <p className="font-LHanoienne text-[#D00000]  font-bold text-center items-center flex justify-center absolute cursor-pointer">
                  tin tức
                </p>
              </div>
              <div className="flex justify-center items-center relative">
                <img
                  src="/images/icons/btn-new.png"
                  className="cursor-pointer"
                  alt="btn"
                />
                <p className="font-LHanoienne text-[#D00000]  font-bold text-center items-center flex justify-center absolute cursor-pointer">
                  {selectedItem.time}
                </p>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: selectedItem?.detail }} />
          </div>
          <div className="md:col-span-1 col-span-3 pt-[20px] md:pt-[80px] xl:pt-[100px] flex flex-col">
            <div className="flex justify-center items-center relative px-4 md:px-0">
              <img
                src="/images/icons/btn-lg.png"
                className="cursor-pointer"
                alt="btn"
              />
              <p className="font-LHanoienne md:text-[24px] text-[20px] font-bold text-center items-center flex justify-center absolute cursor-pointer">
                TIN TỨC LIÊN QUAN
              </p>
            </div>
            {/* LIST ITEM RELATION */}
            <div className="px-4 md:px-0 flex flex-col items-center md:gap-8 gap-6 md:pt-10 pt-8 pb-8">
              {[1, 2, 3].map((item, index) => {
                return (
                  <div key={item} className="flex flex-col items-center">
                    <img src={LIST_NEWS[index].thumbnail} alt="" />
                    <p className="md:pl-14 md:pr-8 mt-4 font-LHanoienne">
                      {LIST_NEWS[index].title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
