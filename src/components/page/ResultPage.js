'use client';

import Image from 'next/image';
import { usePsyStore } from '@/app/store/store';
import r1 from '@/../public/3.result/r1infor.png';
import r2 from '@/../public/3.result/r2infor.png';
import r3 from '@/../public/3.result/r3infor.png';
import r4 from '@/../public/3.result/r4infor.png';
import r5 from '@/../public/3.result/r5infor.png';
import r6 from '@/../public/3.result/r6infor.png';
import r1bg from '@/../public/3.result/r1background.png';
import r2bg from '@/../public/3.result/r2background.png';
import r3bg from '@/../public/3.result/r3background.png';
import r4bg from '@/../public/3.result/r4background.png';
import r5bg from '@/../public/3.result/r5background.png';
import r6bg from '@/../public/3.result/r6background.png';

const getResultImage = (score) => {
  if (score <= 5) return r1;
  if (score <= 10) return r2;
  if (score <= 15) return r3;
  if (score <= 20) return r4;
  if (score <= 25) return r5;
  return r6;
};

const getResultBackground = (score) => {
  if (score <= 5) return r1bg;
  if (score <= 10) return r2bg;
  if (score <= 15) return r3bg;
  if (score <= 20) return r4bg;
  if (score <= 25) return r5bg;
  return r6bg;
};

export default function ResultPage() {
  const { score, updateState, updateQuestionState, updateScore } = usePsyStore();

  const restart = () => {
    updateState(0);
    updateQuestionState(0);
    updateScore(0);
  };

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* 背景圖 */}
      <Image
        src={getResultBackground(score)}
        alt="背景圖"
        fill
        className="object-cover z-0"
        priority
      />

      {/* 內容容器：置中對齊且有上下 padding */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-[680px] flex flex-col gap-6 items-center">
          {/* 前景圖區塊：等比縮放，適應螢幕 */}
          <div className="relative w-full aspect-[393/852]">
            <Image
              src={getResultImage(score)}
              alt="前景圖"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* 按鈕區塊：寬度同前景圖，並在下方貼齊 */}
          <div className="flex flex-row gap-4 w-full">
            <button
              className="bg-[#AA5F26] flex-1 rounded-full text-white py-3 text-sm font-medium shadow-[0px_4px_0px_1px_#84491C] hover:translate-y-0.5 transition"
              onClick={restart}
            >
              再玩一次
            </button>
            <button
              className="bg-[#AA5F26] flex-1 rounded-full text-white py-3 text-sm font-medium shadow-[0px_4px_0px_1px_#84491C] hover:translate-y-0.5 transition"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: '貓咪人格測驗',
                    text: '來看看你是哪隻貓吧！',
                    url: window.location.href,
                  });
                } else {
                  alert('請手動複製連結分享');
                }
              }}
            >
              分享測驗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
