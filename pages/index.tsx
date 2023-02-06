import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Loader from 'components/loader'
import EmptyWrapper from 'components/emptyWrapper'

export default function Home() {
  const { status } = useSession()

  return (
    <>
      <Head>
        <title>IPFS Notes</title>
        <meta name="description" content="IPFS Notes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {status === 'loading' ? (
        <EmptyWrapper>
          <Loader />
        </EmptyWrapper>
      ) : null}
      {status === 'unauthenticated' ? (
        <EmptyWrapper>
          <p> To be able to list and upload you need to connect your wallet.</p>
        </EmptyWrapper>
      ) : null}
      {status === 'authenticated' ? <div></div> : null}
    </>
  )
}
