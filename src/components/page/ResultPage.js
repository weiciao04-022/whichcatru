'use client';

import Image from 'next/image';
import { usePsyStore } from '@/app/store/store';
import r1 from '@/../public/3.result/r1.png';
import r2 from '@/../public/3.result/r2.png';
import r3 from '@/../public/3.result/r3.png';
import r4 from '@/../public/3.result/r4.png';
import r5 from '@/../public/3.result/r5.png';
import r6 from '@/../public/3.result/r6.png';

const getResultImage = (score) => {
  if (score <= 5) return r1;
  if (score <= 10) return r2;
  if (score <= 15) return r3;
  if (score <= 20) return r4;
  if (score <= 25) return r5;
  return r6;
};

export default function ResultPage() {
  const { score, updateState, updateQuestionState, updateScore } = usePsyStore();

  const restart = () => {
    updateState(0);
    updateQuestionState(0);
    updateScore(0);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 背景圖片鋪滿整頁 */}
      <Image
        src={getResultImage(score)}
        alt="測驗結果"
        fill
        className="object-cover"
        priority
      />

      {/* 下方按鈕區塊 */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center px-4">
        

        <div className="flex flex-col sm:flex-row gap-4 = w-full max-w-md">
          <button
            className="bg-[#AA5F26] flex-1  rounded-full text-white py-3 text-sm font-medium shadow-[0px_4px_0px_1px_#84491C] hover:translate-y-0.5 transition"
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
              } else {x
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
