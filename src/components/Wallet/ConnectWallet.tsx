import React, { FC } from 'react'
import useUser from '@context/UserContext'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import trimHandle from '@utils/trimHandle'
import shortAddress from '@utils/formatAddress'

const ConnectWallet: FC = () => {
  const { defaultProfile } = useUser()

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <CustomConnectButton
                    label="Connect wallet"
                    onClick={openConnectModal}
                  />
                )
              }
              if (chain.unsupported) {
                return (
                  <CustomConnectButton
                    label="Wrong network"
                    onClick={openChainModal}
                  />
                )
              }
              return (
                <div className="flex gap-4 flex-col sm:flex-row">
                  <CustomConnectButton
                    label={
                      defaultProfile?.handle ??
                      (account.displayName || shortAddress(account.address))
                    }
                    onClick={openAccountModal}
                    on
                  />
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default ConnectWallet

type CustomConnectButtonProps = {
  label?: string
  onClick: (v: any) => void
  on?: boolean
}

const CustomConnectButton: FC<CustomConnectButtonProps> = ({
  label,
  onClick,
  on,
}) => {
  return (
    <button
      className="flex items-center justify-center hover:bg-green/10 shadow border-2 border-green rounded-xl px-6 py-2"
      onClick={onClick}
    >
      <div className="w-full flex items-center justify-between gap-4">
        <img src="/favicon.png" className="h-8 w-8 rounded-full" />
        <p className="leading-none font-semibold text-green text-lg">
          {label || 'Connect Wallet'}
        </p>
      </div>
    </button>
  )
}
