'use client';

import Image from 'next/image';
import { usePsyStore } from '@/app/store/store';
import r1 from '@/../public/3.result/r1.png';
import r2 from '@/../public/3.result/r2.png';
import r3 from '@/../public/3.result/r3.png';
import r4 from '@/../public/3.result/r4.png';
import r5 from '@/../public/3.result/r5.png';
import r6 from '@/../public/3.result/r6.png';

const resultImages = [r1, r2, r3, r4, r5, r6];

export default function ResultPage() {
  const { score, updateState, updateQuestionState, updateScore } = usePsyStore();

  // 根據 score 選對應圖片 index
  const getResultImage = (score) => {
    if (score <= 5) return r1;
    if (score <= 10) return r2;
    if (score <= 15) return r3;
    if (score <= 20) return r4;
    if (score <= 25) return r5;
    return r6;
  };

  const restart = () => {
    updateState(0); // 回到 StartPage
    updateQuestionState(0);
    updateScore(0);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between items-center bg-[#E4E7EB] overflow-hidden">
      {/* 結果圖片 */}
      <div className="w-full h-full">
        <Image
          src={getResultImage(score)}
          alt="測驗結果"
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 按鈕區 */}
      <div className="absolute bottom-8 z-10 w-full px-4 max-w-md flex flex-col items-center">
        <div className="text-[#B95F0F] font-bold text-center text-[16px] leading-loose tracking-wide mb-4">
          
        </div>
        <div className="flex justify-center gap-2 w-full">
          <button
            className="bg-[#AA5F26] w-full rounded-full text-white py-[16px] text-sm font-medium shadow-[0px_4px_0px_1px_#84491C] hover:translate-y-0.5 transition"
            onClick={restart}
          >
            再玩一次
          </button>
          <button
            className="bg-[#AA5F26] w-full rounded-full text-white py-[16px] text-sm font-medium shadow-[0px_4px_0px_1px_#84491C] hover:translate-y-0.5 transition"
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
  );
}
