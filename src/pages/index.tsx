import { Head } from "minista"

const home = () => {
  return (
    <>
      <Head>
        <title>Hello!</title>
      </Head>
      <h1>WelL come</h1>
      <p>My portolio</p>
      <img
        src="/hoge.png"
        alt="image"
        width={200}
        height={200}
        decoding="async"
        loading="lazy"
      />
    </>
  )
}

export default home
