import { Head, Image } from "minista"
import "../style/pico.fluid.classless.css"
import "../style/base.css"
import DescriptionList from "../components/descriptionList"
import { descriptionList } from "../api/descriptionData"
import { skillSets } from "../api/skillSets"
import ThemeSwitch from "../components/themeSwitch"
import React from "react"


const home = () => {
  return (
    <>
      <Head>
        <title>Hello!</title>
        <script type="module" src="/src/assets/entry.ts" />
      </Head>
      <header>
        <ThemeSwitch />
      </header>
      <main>
        <h1>僕は努力しない自分は嫌いだ</h1>
        <flex-box style={{ '--align': 'end' } as React.CSSProperties} >
          <Image
            src="/public/img_admin.png"
            alt="my image"
            format="webp"
            width={400}
            height={400}
            loading="eager"
          />
          <DescriptionList data={descriptionList} />
        </flex-box>
        <stack-space space='64' />
        <section>
          <h2>スキルセットとベースライン</h2>
          <p>「必要な時に必要な場所へ必要なものを必要なだけ」</p>
          <p>「コーディングによって自分ではなく顧客の課題を解決する。」</p>
          <stack-space space='32' />
          <grid-container style={{ '--grid-cols': 3 } as React.CSSProperties}>
          <DescriptionList data={skillSets} />
          </grid-container>
        </section>
      </main>
    </>
  )
}

export default home
