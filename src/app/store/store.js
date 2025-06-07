import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
	// states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 5,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "【第一站】霧中的小徑你走入森林，一切安靜得過分，忽然出現三條路。 你會選哪條？",
      options: [
        {title: "帶著遠方鳥鳴聲的薄霧小路", value: 2},
        {title: "長滿苔癬、陽光斑駁的老石階", value: 4},
        {title: "乾淨筆直、像誰刻意維護的道路", value: 5}
      ]
    },
    "2":{
      title: "【第二站】失語書店你進入一間舊書店，書都沒有書名，牆邊有一本你特別想翻開的書。 你會翻哪一本？",
      options: [
        {title: "有咖啡漬痕跡、像剛有人翻過的日記", value: 3},
        {title: "被鎖住但上頭有你名字的封面", value: 1},
        {title: "一本畫滿怪貓圖案的兒童繪本", value: 6}
      ]
    },
    "3":{
      title: "【第三站】鏡子走廊走廊兩邊都是鏡子，但每一面映出的你都不太一樣。 你決定……你會做什麼？",
      options: [
        {title: "立對一面看起來像小時候的你說話", value: 4},
        {title: "快速通過，避免和任何一面對視", value: 2},
        {title: "把其中一面鏡子偷偷塞進包裡", value: 5}
      ]
    },
    "4":{
      title: "【第四站】貓的房間 一間佈滿枕頭與織毯的房間中，你看到一群不同風格的貓正在午睡。 你想靠近哪一隻？",
      options: [
        {title: "那隻正在夢中說夢話的小貓", value: 3},
        {title: "那隻把頭埋在書裡的黑貓", value: 1},
        {title: "那隻睡到踢翻顏料罐還無動於衷的花貓", value: 6}
      ]
    },
    "5":{
      title: "【第五站】月台上的貓車 你走到最後的車站，站牌寫著「只送抵你自己心底的地方」。 有六節車廂，每節都有一隻貓趴著看你。你會走向哪節？",
      options: [
        {title: "最愛美的緬因貓", value: 5},
        {title: "疲倦但神秘的銀色貓", value: 1},
        {title: "像朦朧雲朵一樣的折耳貓", value: 4},
        {title: "一直在碎念但不討人厭的橘貓", value: 2},
        {title: "對你眨眼後馬上逃走的灰貓", value: 3},
        {title: "一邊翻跟斗一邊畫畫的三花", value: 6}
      ]
    }
  },
}))



export { usePsyStore, useQuestionStore }