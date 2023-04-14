import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>myFlix</title>
        <meta name="description" content="Anime!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-white px-2 py-2">Home Page!</h1>
    </>
  )
}
