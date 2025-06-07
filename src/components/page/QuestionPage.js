'use client';

import React from 'react';
import { usePsyStore, useQuestionStore } from '@/app/store/store';
import Image from 'next/image';
import q1 from '@/../public/1.question/q1background.png';
import q2 from '@/../public/1.question/q2background.png';
import q3 from '@/../public/1.question/q3background.png';
import q4 from '@/../public/1.question/q4background.png';
import q5 from '@/../public/1.question/q5background.png';

const backgroundMap = [q1, q2, q3, q4, q5];

const buttonStyleMap = [
  { bg: 'bg-[#5581A1]' }, // q1: 藍
  { bg: 'bg-[#D39336]' }, // q2: 橘
  { bg: 'bg-[#34483D]' }, // q3: 綠
  { bg: 'bg-[#8B3D02]' }, // q4: 紫粉
  { bg: 'bg-[#3D4967]' }, // q5: 靛藍
];

export default function QuestionPage({ questionIndex, nextStep }) {
  const { questions } = useQuestionStore();
  const updateScore = usePsyStore((state) => state.updateScore);
  const score = usePsyStore((state) => state.score);

  const question = questions?.[(questionIndex + 1).toString()];
  if (!question) return null;

  const { title, options } = question;

  const handleClick = (option) => {
    updateScore(score + option.value);
    console.log(option.title, option.value);
    nextStep();
  };

  const { bg } = buttonStyleMap[questionIndex] || {};

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <Image
        src={backgroundMap[questionIndex]}
        alt={`q${questionIndex + 1}background`}
        fill
        className="object-cover z-0"
        priority
      />

      <div className="relative z-10 flex flex-col items-center gap-[26px] px-6 max-w-2xl text-center text-white">
        <div className="font-bold text-2xl sm:text-2xl whitespace-pre-wrap mb-[60px]">
          {title}
        </div>

        <div className="flex flex-col gap-4 w-full items-center">
          {options.map((option, index) => (
            <div
              key={option.title + index}
              onClick={() => handleClick(option)}
              className={`${bg}  text-white w-[300px] rounded-full py-[16px] text-sm flex justify-center 
              items-center font-medium cursor-pointer hover:translate-y-0.5 transition`}
            >
              {option.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
