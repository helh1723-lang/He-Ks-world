export type RamblingArticle = {
  slug: string;
  date: string;
  displayDate: string;
  category: "日记" | "游记" | "手记";
  location: string;
  title: string;
  summary: string;
  cover: string;
  coverAlt: string;
  caption: string;
  readingMinutes: number;
  sections: readonly {
    heading?: string;
    paragraphs: readonly string[];
    image?: string;
    imageAlt?: string;
    imageCaption?: string;
  }[];
};

export const ramblingArticles: readonly RamblingArticle[] = [
  {
    slug: "make-first-understand-later",
    date: "2026-04-18",
    displayDate: "2026 / 04 / 18",
    category: "手记",
    location: "DESK, LATE NIGHT",
    title: "先做出来，再慢慢想明白",
    summary: "很多东西一开始只是一个说不清楚的念头。真正动手以后，问题才会从一团雾变成可以解决的小零件。",
    cover: "ramblings/night-screen.png",
    coverAlt: "个人展示页的星空首屏",
    caption: "A SCREEN FULL OF STARS / 2026",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "这是一篇用来测试长文阅读的示例手记。正式记录时，可以从一个很小的现场开始：桌面上的光、没有关掉的编辑器，或者刚刚想到的一句话。",
          "长文不需要一上来就有结论。把当时看到什么、正在处理什么、为什么犹豫写下来，过程本身就会形成线索。",
        ],
      },
      {
        heading: "当问题变得具体",
        paragraphs: [
          "脑子里的想法往往没有尺寸。只有当它变成一个画面、一段代码或一个可以点击的按钮，才能看到哪里不对。",
          "所以这个页面会把图片当作文章的一部分，而不是装饰。它记住文字没有记住的比例、颜色和当时的完成度。",
        ],
        image: "ramblings/stacked-projects.png",
        imageAlt: "层叠排列的项目卡片",
        imageCaption: "WORK IN PROGRESS / KEEP THE MESS",
      },
    ],
  },
  {
    slug: "color-is-a-switch",
    date: "2026-03-29",
    displayDate: "2026 / 03 / 29",
    category: "日记",
    location: "ROOM LIGHT, 22:40",
    title: "颜色不是装饰，是情绪开关",
    summary: "同一个界面换一种颜色，像是把房间里的灯重新打开。内容没有变，但看它的心情已经不同。",
    cover: "ramblings/lime-interface.png",
    coverAlt: "荧光绿色的项目界面",
    caption: "LIME MODE / PAPERHAND",
    readingMinutes: 4,
    sections: [
      {
        paragraphs: [
          "这里适合放一篇更像日记的文字。它不需要证明什么，只需要把那一天为什么突然对某种颜色有感觉说清楚。",
          "照片负责留下当时的光线，文字只负责留下当时的想法。它们不必完全解释彼此，稍微有一点距离反而更像回忆。",
        ],
      },
      {
        heading: "重新打开一盏灯",
        paragraphs: [
          "界面中的颜色很像环境光。它不应该到处抢话，但它决定了人是想继续停留，还是尽快离开。",
        ],
      },
    ],
  },
  {
    slug: "keep-the-road-not-answer",
    date: "2026-02-11",
    displayDate: "2026 / 02 / 11",
    category: "游记",
    location: "SOMEWHERE ON THE WAY",
    title: "留下过程，比留下答案更有意思",
    summary: "游记不只记景点。路线、误车、天色和一句随口听来的话，都可以是一段旅程的主角。",
    cover: "ramblings/stacked-projects.png",
    coverAlt: "层叠排列的画面",
    caption: "ON THE WAY / NOTES WITHOUT A MAP",
    readingMinutes: 8,
    sections: [
      {
        paragraphs: [
          "这是游记版式的示例。正文可以很长，段落之间保留足够的呼吸，让读者不需要一次把所有内容读完。",
          "一篇真正的游记可以按时间写，也可以按地点写。只要在文章数据中补充日期、地点、段落和照片，左侧档案就会自动生成。",
        ],
      },
      {
        heading: "不用急着到达",
        paragraphs: [
          "完成品总是干净的，真正有意思的往往是绕过的远路、临时改变的方向，以及后来想想仍然觉得好笑的决定。",
        ],
        image: "ramblings/night-screen.png",
        imageAlt: "深色背景上的星空画面",
        imageCaption: "NIGHT WINDOW / BEFORE ARRIVAL",
      },
    ],
  },
];

export const ramblingCategories = ["全部", "日记", "游记", "手记"] as const;
