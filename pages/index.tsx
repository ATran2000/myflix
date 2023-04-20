import Head from 'next/head'
import AnimeList from "@/components/AnimeList"
import useAnimeList from "@/hooks/useAnimeList"
import InfoModal from "@/components/InfoModal"
import useInfoModal from "@/hooks/useInfoModal"

export default function Home() {
  const { data: animes = [] } = useAnimeList()
  const { isOpen, closeModal } = useInfoModal()

  return (
    <div className="bg-hero bg-no-repeat bg-bottom">
      <Head>
        <title>myFlix</title>
        <meta property="og:url" content="https://alvins-myflix.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="myFlix"
        />
        <meta
          property="og:description"
          content="Check out my favorite anime!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image:secure_url" content="https://alvins-myflix.vercel.app/images/profile.jpg" />
        <meta property="og:image:width" content="500"/>
        <meta property="og:image:height" content="500"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h4 className="text-center font-mono font-semibold text-7xl text-green-400 px-2 py-2">myFli<span className="text-pink-400">x</span></h4>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <AnimeList title="Alvin's Favorites" data={animes} />
    </div>
  )
}
