import Head from 'next/head'
import AnimeList from "@/components/AnimeList"
import useAnimeList from "@/hooks/useAnimeList"
import InfoModal from "@/components/InfoModal"
import useInfoModal from "@/hooks/useInfoModal"

export default function Home() {
  const { data: animes = [] } = useAnimeList()
  const { isOpen, closeModal } = useInfoModal()

  return (
    <div>
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
        <meta property="og:image:secure_url" content="https://alvins-myflix.vercel.app/images/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-white px-2 py-2">myFlix!</h1>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <AnimeList title="Alvin's Favorites" data={animes} />
    </div>
  )
}
