'use client';

import Image from 'next/image';
import bg from '@/../public/2.displayresult/displayresultbackground.png';




export default function DisplayResultPage({nextStep}) {

  return (
    <>
      
      <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* 背景圖 */}
      <Image
        src={bg}
        alt="display background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* 文字與按鈕區塊 */}
      <div className="z-10 max-w-xl text-center px-6 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold leading-relaxed">
          星光記錄下你的選擇，<br />
          貓長老已知曉你的歸屬。
        </h2>

        <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
          在接下來的畫面中，<br />
          你將看見自己內心深處的一隻貓。<br />
          或許牠會說話，或許牠只會靜靜看著你，<br />
          但牠一直都在。
        </p>

        <button
          onClick={nextStep}
          className="bg-[#5D70A3] hover:bg-[#394F7B] transition text-white font-bold py-2 px-6 rounded-full text-sm sm:text-base shadow-md"
        >
          揭示我的貓咪身份
        </button>
      </div>
    </div>
      
    </>
  );
}