import React, { FC, useEffect, useState } from 'react'

type Props = {
  src: string
  alt?: string
  className?: string
}

const LazyImage: FC<Props> = (props) => {
  const { src, alt, className } = props

  const [loading, setLoading] = useState(true)

  const [currentSrc, updateSrc] = useState<undefined | string>()

  useEffect(() => {
    let mounted = true
    const imageToLoad = new Image()
    imageToLoad.src = src
    imageToLoad.onload = () => {
      if (mounted) {
        setLoading(false)
        updateSrc(src)
      }
    }
    return function cleanup() {
      mounted = false
    }
  }, [src, updateSrc, setLoading])

  if (loading) {
    return (
      <div className={className}>
        <div className="rounded-full relative w-full h-full bg-white">
          <div className="rounded-full absolute w-full h-full bg-light-line-blue/80 dark:bg-light-pink/80 animate-pulse" />
        </div>
      </div>
    )
  } else {
    return <img src={currentSrc} className={className} alt={alt} />
  }
}

export default LazyImage
