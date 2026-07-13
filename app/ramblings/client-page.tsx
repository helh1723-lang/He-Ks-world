"use client";

import { useEffect, useMemo, useState } from "react";
// @ts-ignore - React Bits registry component is a JavaScript module.
import BlurText from "../../src/components/BlurText";
import { ramblingArticles, ramblingCategories } from "../../src/content/ramblings";

const baseUrl = import.meta.env.BASE_URL;

export default function RamblingsPage() {
  const [category, setCategory] = useState<(typeof ramblingCategories)[number]>("全部");
  const [selectedSlug, setSelectedSlug] = useState(ramblingArticles[0].slug);
  const [reduceMotion, setReduceMotion] = useState(false);

  const visibleArticles = useMemo(() => category === "全部"
    ? ramblingArticles
    : ramblingArticles.filter((article) => article.category === category), [category]);
  const article = ramblingArticles.find((item) => item.slug === selectedSlug) ?? ramblingArticles[0];

  useEffect(() => {
    const syncArticle = () => {
      const slug = window.location.hash.slice(1);
      if (ramblingArticles.some((item) => item.slug === slug)) setSelectedSlug(slug);
    };
    syncArticle();
    window.addEventListener("hashchange", syncArticle);
    return () => window.removeEventListener("hashchange", syncArticle);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const selectArticle = (slug: string) => {
    window.location.hash = slug;
    setSelectedSlug(slug);
    document.querySelector(".journal-reader")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  const selectCategory = (nextCategory: (typeof ramblingCategories)[number]) => {
    setCategory(nextCategory);
    const first = nextCategory === "全部"
      ? ramblingArticles[0]
      : ramblingArticles.find((item) => item.category === nextCategory);
    if (first) selectArticle(first.slug);
  };

  return <main className="ramblings-page">
    <header className="ramblings-topbar">
      <a className="wordmark" href={baseUrl} aria-label="返回 He K 个人展示页"><span>HE K</span><i>/</i>WORLD</a>
      <span>随便瞎说 / JOURNAL</span>
      <a className="ramblings-back" href={baseUrl}>返回首页 -&gt;</a>
    </header>

    <section className="journal-masthead">
      <p className="ramblings-kicker">A JOURNAL OF PLACES, DAYS AND THINGS I ALMOST UNDERSTOOD.</p>
      {reduceMotion
        ? <h1>随便瞎说。</h1>
        : <BlurText className="journal-title" text="随便瞎说。" delay={45} direction="top" stepDuration={0.35} />}
      <div className="journal-masthead-foot">
        <p>日记、游记和做东西时留下的手记。图片记住现场，长文记住当时为什么会那样想。</p>
        <span>{String(ramblingArticles.length).padStart(2, "0")} ENTRIES / 2026</span>
      </div>
    </section>

    <section className="journal-shell">
      <aside className="journal-archive" aria-label="文章档案">
        <div className="archive-heading"><span>ARCHIVE</span><span>{visibleArticles.length}</span></div>
        <div className="archive-filters" aria-label="文章分类">
          {ramblingCategories.map((item) => <button
            className={category === item ? "active" : ""}
            key={item}
            onClick={() => selectCategory(item)}
            type="button"
          >{item}</button>)}
        </div>
        <ol className="archive-list">
          {visibleArticles.map((item, index) => <li key={item.slug}>
            <button
              className={article.slug === item.slug ? "active" : ""}
              onClick={() => selectArticle(item.slug)}
              type="button"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <small>{item.displayDate} / {item.category}</small>
            </button>
          </li>)}
        </ol>
      </aside>

      <article className="journal-reader" aria-live="polite" key={article.slug}>
        <header className="article-header">
          <p className="article-meta">{article.category} / {article.displayDate} / {article.readingMinutes} MIN READ</p>
          <h2>{article.title}</h2>
          <p className="article-summary">{article.summary}</p>
          <div className="article-place"><span>WHERE</span><strong>{article.location}</strong></div>
        </header>

        <figure className="article-cover">
          <img src={`${baseUrl}${article.cover}`} alt={article.coverAlt} />
          <figcaption>{article.caption}</figcaption>
        </figure>

        <div className="article-body">
          {article.sections.map((section, index) => <section key={`${article.slug}-${index}`}>
            {section.heading && <h3>{section.heading}</h3>}
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.image && <figure className="article-inline-image">
              <img loading="lazy" src={`${baseUrl}${section.image}`} alt={section.imageAlt} />
              <figcaption>{section.imageCaption}</figcaption>
            </figure>}
          </section>)}
        </div>

        <footer className="article-end">
          <span>END / {article.date}</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}>回到顶部 -&gt;</button>
        </footer>
      </article>
    </section>

    <footer className="ramblings-footer">
      <p>MORE DAYS WILL BE ADDED HERE.</p>
      <a href={baseUrl}>日记先写到这里，回去继续造东西。 -&gt;</a>
    </footer>
  </main>;
}
