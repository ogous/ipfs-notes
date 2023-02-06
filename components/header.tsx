import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import Button from './button'
import { useSession } from 'next-auth/react'

export default function Header() {
  const { status } = useSession()

  return (
    <div className="flex items-center justify-between py-3 px-8">
      <Link href="/">
        <h1
          className={
            'font-lato bg-gradient-to-r from-tertiary via-primary to-secondary bg-clip-text text-center font-inter text-4xl font-black leading-[70px] text-transparent underline'
          }
        >
          IPFS Notes
        </h1>
      </Link>
      <div className="flex space-x-2">
        {status === 'authenticated' ? (
          <Button href="/upload">Upload</Button>
        ) : null}
        <ConnectButton
          showBalance={{ smallScreen: false, largeScreen: true }}
        />
      </div>
    </div>
  )
}
