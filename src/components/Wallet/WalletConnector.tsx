import useUser from '@context/UserContext'
import {
  Profile,
  useAuthenticateMutation,
  useChallengeLazyQuery,
  useCurrentUserLazyQuery,
} from '@generated/graphql'
import setError from '@utils/setError'
import Cookies from 'js-cookie'
import React, { FC, useEffect } from 'react'
import { COOKIE_CONFIG } from 'src/apollo'
import { CHAIN_ID } from 'src/constants'
import { useAccount, useNetwork, useSignMessage, useSwitchNetwork } from 'wagmi'
import ConnectWallet from './ConnectWallet'

const WalletConnector: FC = () => {
  const { setProfiles, setIsAuthenticated, setCurrentUser, isAuthenticated } =
    useUser()

  const { chain } = useNetwork()
  const { address, connector: activeConnector } = useAccount()
  const { switchNetwork } = useSwitchNetwork()

  const { signMessageAsync, isLoading: signLoading } = useSignMessage()

  const [
    loadChallenge,
    { error: errorChallenege, loading: challenegeLoading },
  ] = useChallengeLazyQuery()

  const [authenticate, { error: errorAuthenticate, loading: authLoading }] =
    useAuthenticateMutation()

  const [getProfiles, { error: errorProfiles, loading: profilesLoading }] =
    useCurrentUserLazyQuery()

  const handleSign = async () => {
    try {
      const challenge = await loadChallenge({
        variables: { request: { address } },
      })

      if (!challenge?.data?.challenge?.text)
        return setError('Auth', 'Something went wrong.')

      const signature = await signMessageAsync({
        message: challenge?.data?.challenge?.text,
      })

      const auth = await authenticate({
        variables: { request: { address, signature } },
      })
      Cookies.set(
        'accessToken',
        auth.data?.authenticate.accessToken,
        COOKIE_CONFIG
      )
      Cookies.set(
        'refreshToken',
        auth.data?.authenticate.refreshToken,
        COOKIE_CONFIG
      )

      const { data: profilesData } = await getProfiles({
        variables: { ownedBy: address },
      })

      if (profilesData?.profiles?.items?.length === 0) {
        setProfiles([])
        setError(
          'Profiles',
          "Wallet doesn't a Lens profile. You can still use the app."
        )
      } else {
        const userProfiles: Profile[] = (
          profilesData?.profiles?.items as Profile[]
        )
          ?.slice()
          ?.sort((a: Profile, b: Profile) => Number(a.id) - Number(b.id))
          ?.sort((a: Profile, b: Profile) =>
            !(a.isDefault !== b.isDefault) ? 0 : a.isDefault ? -1 : 1
          )
        setIsAuthenticated(true)
        setProfiles(userProfiles)
        setCurrentUser(userProfiles[0])
      }
    } catch (error: any) {
      setError(
        'Sign Challenge',
        error.action === 'signMessage'
          ? 'User rejected signature'
          : error.message ?? 'Something went wrong'
      )
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      ;(async function () {
        try {
          const { data: profilesData } = await getProfiles({
            variables: { ownedBy: address },
          })

          if (profilesData?.profiles?.items?.length === 0) {
            setProfiles([])
            setError('Profiles', "Wallet doesn't own profiles")
          } else {
            const profiles: Profile[] = (
              profilesData?.profiles?.items as Profile[]
            )
              ?.slice()
              ?.sort((a: Profile, b: Profile) => Number(a.id) - Number(b.id))
              ?.sort((a: Profile, b: Profile) =>
                !(a.isDefault !== b.isDefault) ? 0 : a.isDefault ? -1 : 1
              )
            setIsAuthenticated(true)
            setProfiles(profiles)
            setCurrentUser(profiles[0])
          }
        } catch (e) {
          setError('Fetch profile', 'Error fetching profiles on auth')
        }
      })()
    }
  }, [
    isAuthenticated,
    address,
    getProfiles,
    setCurrentUser,
    setIsAuthenticated,
    setProfiles,
  ])

  if (!isAuthenticated && activeConnector?.id) {
    const loadingSig =
      signLoading || challenegeLoading || authLoading || profilesLoading

    return (
      <button
        className={`flex items-center justify-center hover:bg-green/10 shadow border-2 border-green rounded-xl px-6 py-2 ${
          loadingSig ? 'bg-green/10 animate-pulse' : ''
        } disabled:bg-green/10 disabled:cursor-not-allowed`}
        disabled={loadingSig}
        onClick={handleSign}
      >
        <div className="w-full flex items-center justify-between gap-4">
          <img src="/favicon.png" className="h-8 w-8 rounded-full" />
          <p className="leading-none font-semibold text-green text-lg">
            {loadingSig ? 'Loading...' : 'Sign in w/ Lens'}
          </p>
        </div>
      </button>
    )
  }

  return activeConnector?.id ? (
    <div className="space-y-3">
      {chain?.id === CHAIN_ID ? (
        <ConnectWallet />
      ) : (
        <button
          className="flex items-center justify-center hover:bg-green/10 shadow border-2 border-green rounded-xl px-6 py-2"
          type="button"
          onClick={() => {
            if (switchNetwork) {
              switchNetwork(CHAIN_ID)
            } else {
              setError('Wallet', 'Please change your network wallet!')
            }
          }}
        >
          <div className="w-full flex items-center justify-between gap-4">
            <img src="/favicon.png" className="h-8 w-8 rounded-full" />
            <p className="leading-none font-semibold text-green text-lg">
              {'Switch network'}
            </p>
          </div>
        </button>
      )}
      {(errorChallenege || errorAuthenticate || errorProfiles) && (
        <div className="flex items-center space-x-1 font-bold text-red-500">
          <div>Something went wrong</div>
        </div>
      )}
    </div>
  ) : (
    <div>
      <ConnectWallet />
    </div>
  )
}

export default WalletConnector
