import { Head, Image } from "minista"
import "../style/pico.fluid.classless.css"
import "../style/base.css"
import DescriptionList from "../components/descriptionList"
import { descriptionList } from "./api/descriptionData"


const home = () => {
  return (
    <>
      <Head>
        <title>Hello!</title>
        <script type="module" src="/src/assets/entry.ts" />
      </Head>
      <header>
        <fieldset>
          <label htmlFor="theme">
            <input
              type="checkbox"
              role="switch"
              id="themeSwitch"
              name="theme"
            />
            change theme{" "}
          </label>
        </fieldset>
      </header>
      <main>
        <h1>僕は努力しない自分は嫌いだ</h1>
        <Image
          src="/public/img_admin.png"
          alt="my image"
          format="webp"
          width={400}
          height={400}
          loading="eager"
        />
        <stack-space space="12" />
        <DescriptionList data={descriptionList} />
      </main>
    </>
  )
}

export default home
