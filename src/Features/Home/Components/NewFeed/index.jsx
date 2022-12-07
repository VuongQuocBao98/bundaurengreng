import React, { useEffect, useState } from "react";

export default function NewFeed() {
  const [newFeed, setnewFeed] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      if (newFeed < 4) {
        setnewFeed(newFeed + 1);
      } else {
        setnewFeed(1);
      }
    }, 1000);
  }, [newFeed]);

  return (
    <div className="flex justify-center bg-[#fffceb] overflow-hidden relative">
      <img
        src="/images/home/feed-bg-1.png"
        className="absolute md:w-auto w-[30%] top-[-40px] left-[6%]"
        alt="bg"
      />
      <img
        src="/images/home/feed-bg-2.png"
        className="absolute md:w-auto w-[30%] bottom-[6%] right-[10%]"
        alt="bg"
      />
      <img
        src="/images/home/feed-bg-3.png"
        className="absolute md:w-auto w-[30%] top-[40%] left-[15%]"
        alt="bg"
      />
      <img
        src="/images/home/feed-bg-4.png"
        className="absolute md:w-auto w-[30%] top-[25%] right-[5%]"
        alt="bg"
      />
      <div className="container px-8 flex items-center flex-col z-10 pb-16">
        <h3 className="text-[20px] text-center md:text-[48px] font-LHanoienne pt-[40px]">
          BÚN ĐẬU RENG RENG - NGON TRÒN VỊ
        </h3>
        <div className="pt-4 pb-4 relative">
          <img
            src={`/images/home/feed${newFeed}.png`}
            alt="bún đậu reng reng"
          />
          <img
            className="absolute bottom-0 md:bottom-[-15px] right-[-10%] w-[35%] md:w-auto animate-rotasm"
            src="/images/home/feed-icon.png"
            alt="icons"
          />
        </div>
        <div className="pt-5 flex flex-col">
          <div className="grid grid-cols-2 gap-[30px]">
            <p className="font-Montser col-span-2 md:col-span-1 md:max-w-[500px]">
              <span className="md:mr-[40px] mr-[20px]"> </span> Hà Nội là cái
              nôi của một nền ẩm thực giản dị, đơn sơ nhưng chứa đựng trong từng
              món ăn sự chăm chút, tinh tế và tỉ mỉ của người nấu. Chỉ cần một
              chút thay đổi trong cách chế biến thì người Hà Nội cũng nhận ra
              món ăn đã bị biến thể ít nhiều. Đến đậu hũ cho món bún đậu cũng
              phải chiên lửa thật khéo, để mặt ngoài vẫn giòn nhưng bên trong
              thì đậu vẫn còn mềm, béo và thơm khi cắt ra, hay đến món chả rươi
              cũng phải làm thật kỹ lưỡng để chả không bị khô, và rươi trong chả
              vẫn không bị mất vị. Đến chén nước chấm cũng phải tỉ mỉ trong từng
              nguyên liệu thêm vào, vì chỉ thiếu một thành phần thì phần linh
              hồn của món ăn đã mất đi quá nửa.
            </p>
            <img
              className="col-span-2 md:col-span-1"
              src="/images/home/feed-img1.png"
              alt="feed"
            />
          </div>
          <div className="pt-[20px] pb-[30px]">
            <img className="" src="/images/home/feed-img2.png" alt="feed" />
          </div>
        </div>
      </div>
    </div>
  );
}
