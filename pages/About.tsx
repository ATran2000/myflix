import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function About() {
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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:image:secure_url" content="https://alvins-myflix.vercel.app/images/profile.jpg" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="500" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
        </div>
    )
}