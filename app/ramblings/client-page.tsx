"use client";

import { useEffect, useState } from "react";
// @ts-ignore - React Bits registry components are JavaScript modules.
import BlurText from "../../src/components/BlurText";
// @ts-ignore
import Dither from "../../src/components/Dither";

const notes = [
  {
    date: "2026 / 04 / 18",
    kind: "MAKING",
    title: "先做出来，再慢慢想明白",
    excerpt: "很多东西一开始只是一个说不清楚的念头。真正动手以后，问题才会从一团雾，变成一个个可以解决的小零件。",
    body: "这里先放了一篇示例随笔。以后可以把它替换成你的真实记录：一段开发过程、一张路上拍的照片，或者某个突然想通的瞬间。",
    image: "/ramblings/night-screen.png",
    alt: "个人展示页的银河首屏",
    caption: "A SCREEN FULL OF STARS / 2026",
  },
  {
    date: "2026 / 03 / 29",
    kind: "SEEING",
    title: "颜色不是装饰，是情绪开关",
    excerpt: "同一个界面换一种颜色，像是把房间里的灯重新打开。内容没有变，但人看它的心情已经不同了。",
    body: "这个版块适合放短观察，不需要把每件事都讲成完整道理。照片负责留下当时的光线，文字只负责留下当时的想法。",
    image: "/ramblings/lime-interface.png",
    alt: "荧光绿色的 PaperHand 项目界面",
    caption: "LIME MODE / PAPERHAND",
  },
  {
    date: "2026 / 02 / 11",
    kind: "KEEPING",
    title: "留下过程，比留下答案更有意思",
    excerpt: "完成品总是干净的，真正有意思的往往是那些被删掉的版本、绕过的远路，以及后来想想仍然觉得好笑的决定。",
    body: "随笔不必按项目分类。你可以记录一次失败、一个画面、一句听来的话，甚至只放一张照片和两行说明。",
    image: "/ramblings/stacked-projects.png",
    alt: "层叠排列的项目卡片",
    caption: "PROJECT DECK / WORK IN PROGRESS",
  },
] as const;

export default function RamblingsPage() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return <main className="ramblings-page">
    <header className="ramblings-topbar">
      <a className="wordmark" href="/" aria-label="返回 He K 个人展示页"><span>HE K</span><i>/</i>MAKES</a>
      <span>随便瞎说 / RAMBLINGS</span>
      <a className="ramblings-back" href="/">返回首页 -&gt;</a>
    </header>

    <section className="ramblings-hero">
      <div className="ramblings-hero-copy">
        {reduceMotion ? <p className="ramblings-kicker">NOTES FROM WHAT I SAW, MADE AND ALMOST UNDERSTOOD.</p> : <BlurText className="ramblings-kicker" text="NOTES FROM WHAT I SAW, MADE AND ALMOST UNDERSTOOD." delay={32} direction="top" stepDuration={0.35} />}
        <h1>随便<em>瞎说。</em></h1>
        <p className="ramblings-lead">这里放一些不一定有结论的东西：路上看到的、做东西时想到的，以及后来又改变主意的。</p>
        <div className="ramblings-index"><span>03 篇起步</span><span>持续乱写</span></div>
      </div>
      <div className="ramblings-visual" aria-hidden="true">
        <Dither waveSpeed={0.035} waveFrequency={2.4} waveAmplitude={0.45} waveColor={[0.77, 0.96, 0.33]} colorNum={3} pixelSize={4} disableAnimation={reduceMotion} enableMouseInteraction={!reduceMotion} mouseRadius={0.55} />
      </div>
    </section>

    <section className="notes-intro" aria-labelledby="notes-heading">
      <h2 id="notes-heading">一些没有被整理成项目的东西。</h2>
      <p>当前放了三篇可直接替换的示例内容。照片、日期与正文都集中在一个数据列表里。</p>
    </section>

    <section className="notes-feed" aria-label="随笔列表">
      {notes.map((note, index) => <article className={`note ${index % 2 ? "note--reverse" : ""}`} key={note.title}>
        <figure className="note-media">
          <div className="note-media-frame"><img src={note.image} alt={note.alt} /></div>
          <figcaption>{note.caption}</figcaption>
        </figure>
        <div className="note-copy">
          <p className="note-meta">0{index + 1} / {note.kind} / {note.date}</p>
          <h3>{note.title}</h3>
          <p className="note-excerpt">{note.excerpt}</p>
          <details>
            <summary>继续瞎说</summary>
            <p>{note.body}</p>
          </details>
        </div>
      </article>)}
    </section>

    <footer className="ramblings-footer">
      <p>THAT IS ALL FOR NOW.</p>
      <a href="/">看完了，回去继续造东西。 -&gt;</a>
    </footer>
  </main>;
}
