import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'

const Tabs = dynamic(() => import('components/tabs'), { ssr: false })

export default function UploadPage() {
  const { data, status } = useSession()
  return (
    <>
      <Head>
        <title>Upload Notes</title>
        <meta name="description" content="Upload Notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{JSON.stringify(status)}</div>
      <div>{JSON.stringify(data)}</div>
      <Tabs />
    </>
  )
}
