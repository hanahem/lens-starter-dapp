import ProfileCard from '@components/ProfileCard'
import WalletConnector from '@components/Wallet/WalletConnector'
import useUser from '@context/UserContext'
import React, { FC } from 'react'
import { LENSTER_URL } from 'src/constants'

const Home: FC = () => {
  const { isAuthenticated, currentUser, defaultProfile } = useUser()

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-max lg:w-2/3 h-full justify-center">
        <div className="h-1/2 w-full">
          <span className="flex items-center gap-4">
            <p className="font-semibold text-4xl sm:text-[50px] text-coal">
              Lens Starter dApp
            </p>
          </span>

          <p className="italic text-coal/50">
            A ready-to-edit Lens dApp boilerplate.
          </p>

          <div className="mt-6">
            <WalletConnector />
          </div>

          <div className="mt-6">
            <ProfileCard />
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start gap-2 w-full">
          <span className="flex items-center gap-2">
            <p className="text-coal/50 font-light">Check out the repo on</p>
            <a
              className="flex items-center gap-1"
              href="https://github.com/hanahem"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                className="w-6 h-6"
              />
              <p className="leading-none underline">Github</p>
            </a>
          </span>

          <span className="flex items-center gap-2">
            <p className="text-coal/50 font-light">A project built on</p>
            <a
              className="flex items-center gap-1"
              href="https://docs.lens.xyz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p className="leading-none underline text-green">
                🌿 Lens Protocol
              </p>
            </a>
          </span>

          <span className="flex items-center gap-2 mt-12">
            <p className="text-coal/50 font-light">Built by</p>
            <a
              className="flex items-center gap-1"
              href={LENSTER_URL + '/u/wassim.lens'}
              target="_blank"
              rel="noreferrer noopener"
            >
              <p className="leading-none underline text-green">wassim.lens</p>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
