import React, { FC, ReactNode, useEffect } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import useUser from '@context/UserContext'
import { useAccount, useDisconnect } from 'wagmi'
import Cookies from 'js-cookie'

type Props = {
  children: ReactNode
}

const AppWrapper: FC<Props> = ({ children }) => {
  const { systemTheme, setTheme } = useTheme()

  useEffect(() => {
    if (typeof window !== undefined) {
      const storedTheme = window.localStorage.getItem('dumpling-theme')
      if (!storedTheme || storedTheme === undefined) {
        window.localStorage.setItem('dumpling-theme', systemTheme || 'light')
      } else {
        setTheme(storedTheme)
      }
    }
  }, [setTheme, systemTheme])

  const { isAuthenticated, setIsAuthenticated, setCurrentUser } = useUser()
  const { connector, isDisconnected } = useAccount()
  const { disconnect } = useDisconnect()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    const refreshToken = Cookies.get('refreshToken')

    const logout = () => {
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')
      setIsAuthenticated(false)
      setCurrentUser(null)
      if (disconnect) disconnect()
    }

    if (
      refreshToken &&
      accessToken &&
      accessToken !== 'undefined' &&
      refreshToken !== 'undefined'
    ) {
      setIsAuthenticated(true)
    } else {
      if (isAuthenticated) logout()
    }

    if (isDisconnected) {
      if (disconnect) disconnect()
      setIsAuthenticated(false)
    }

    connector?.on('change', () => {
      logout()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isDisconnected) {
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')
    }
  }, [isDisconnected])

  return (
    <div className="w-full h-screen">
      <ThemeProvider attribute="class">
        <div className="pt-1 w-full h-full">{children}</div>
      </ThemeProvider>
    </div>
  )
}

export default AppWrapper
