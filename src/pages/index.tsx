import { Head, Image } from "minista"
import "../style/pico.fluid.classless.css"
import "../style/base.css"
import DescriptionList from "../components/descriptionList"
import { descriptionList } from "../api/descriptionData"
import { skillSets } from "../api/skillSets"
import ThemeSwitch from "../components/themeSwitch"
import React from "react"
import { achievements } from "../api/achievements"

const home = () => {
  return (
    <>
      <Head>
        <title>monoharadaのポートフォリオ</title>
        <meta
          name="description"
          content="monoharadaのポートフォリオ、業務改善及びフロントエンドの品質・効率化をご相談ください。このページのソース:https://github.com/monoharada/portfolio"
        />
        <script type="module" src="/src/assets/entry.ts" />
      </Head>
      <header>
        <ThemeSwitch />
        <a
          href="https://github.com/monoharada/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
      </header>
      <main>
        <h1>僕は努力しない自分は嫌いだ</h1>
        <flex-box style={{ "--align": "end" } as React.CSSProperties} wrap>
          <Image
            src="/src/assets/image/img_admin.png"
            alt="my image"
            format="webp"
            width={400}
            height={400}
            loading="eager"
            quality={65}
          />
          <DescriptionList data={descriptionList} />
        </flex-box>
        <stack-space space="64" />
        <section>
          <h2>スキルセットとベースライン</h2>
          <grid-container style={{ "--grid-cols": 3 } as React.CSSProperties}>
            <DescriptionList data={skillSets} className={"card"} />
          </grid-container>
          <stack-space space="32"/>
          <p>「必要な時に必要な場所へ必要なものを必要なだけ」</p>
          <p>「コーディングによって自分ではなく顧客の課題を解決する。」</p>
        </section>
        <section>
          <h2>事例</h2>
          <DescriptionList data={achievements} className="stack" />
        </section>
      </main>
    </>
  )
}

export default home
