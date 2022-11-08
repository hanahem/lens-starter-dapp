import { Profile } from '@generated/graphql'
import { useContext, createContext, useState } from 'react'

const UserCtx = createContext(
  {} as {
    defaultProfile?: Profile
    profiles?: Profile[]
    currentUser: Profile | null
    isAuthenticated: boolean
    setProfiles: (p: Profile[]) => void
    setCurrentUser: (u: Profile | null) => void
    setIsAuthenticated: (v: boolean) => void
    userSigNonce: number
    setUserSigNonce: (n: number) => void
  }
)

export const UserProvider = ({ children }: any) => {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [currentUser, setCurrentUser] = useState<Profile | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isAppLoading, setIsAppLoading] = useState<boolean>(false)
  const [userSigNonce, setUserSigNonce] = useState<number>(0)

  const defaultProfile =
    profiles && profiles.length > 0
      ? profiles.find((p: Profile) => p.isDefault)
      : undefined

  return (
    <UserCtx.Provider
      value={{
        defaultProfile,
        profiles,
        currentUser,
        isAuthenticated,
        setProfiles,
        setCurrentUser,
        setIsAuthenticated,
        userSigNonce,
        setUserSigNonce,
      }}
    >
      {children}
    </UserCtx.Provider>
  )
}

export const useUser = () => useContext(UserCtx)
export default useUser
