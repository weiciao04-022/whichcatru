'use client'

import React from "react";
import Image from "next/image";
import background from "@/../public/0.start/startPageBackground.png";
import { usePsyStore } from "@/app/store/store";


const StartPage = () => {
  const updateState = usePsyStore((state) => state.updateState);

  const nextStep = () => {
    updateState(1); // 進入第一關卡狀態
  };

  return (
    <div className="relative w-full h-screen">
      {/* 背景圖 */}
      <Image
        src={background}
        alt="start background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* 文字層 */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          歡迎來到《貓咪的試煉》
        </h1>
        <p className="mb-20 sm:text-3xl font-bold">
          你的內心貓咪，正等待甦醒。
        </p>
        <p className="text-2xl sm:text-base mb-10 mt-7 leading-relaxed">
          六位貓長老已聚集於月下石陣，<br />
          他們將引導你完成六道試煉，<br />
          找出你內心真正潛伏的貓咪性格。
        </p>
        <button onClick={nextStep} className="text-base px-6 py-2 rounded-xl mt-7 bg-white text-black hover:bg-gray-100">
          開始試煉
        </button>
      </div>
    </div>
  );
};

export default StartPage;
