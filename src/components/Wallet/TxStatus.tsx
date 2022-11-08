import { useHasTxHashBeenIndexedQuery } from '@generated/graphql'
import setSuccess from '@utils/setSuccess'
import React, { FC, useEffect, useState } from 'react'
import { BLOCK_EXPLORER_URL } from 'src/constants'

type Props = {
  type?: string
  txHash: string
  reload?: boolean
  refetchAll: () => void
}

const TxStatus: FC<Props> = ({
  type = 'Transaction',
  txHash,
  reload = false,
  refetchAll,
}) => {
  const [hide, setHide] = useState<boolean>(false)
  const [pollInterval, setPollInterval] = useState<number>(500)
  const { data, loading } = useHasTxHashBeenIndexedQuery({
    variables: {
      request: { txHash },
    },
    fetchPolicy: 'network-only',
    pollInterval,
    onCompleted(data) {
      if (
        data?.hasTxHashBeenIndexed &&
        data?.hasTxHashBeenIndexed.__typename === 'TransactionIndexedResult' &&
        data?.hasTxHashBeenIndexed.indexed
      ) {
        refetchAll()
        setPollInterval(0)
        if (reload) {
          location.reload()
        }
        setTimeout(() => {
          setHide(true)
        }, 5000)
      }
    },
  })

  useEffect(() => {
    if (
      data &&
      data?.hasTxHashBeenIndexed &&
      data?.hasTxHashBeenIndexed.__typename === 'TransactionIndexedResult' &&
      data?.hasTxHashBeenIndexed.indexed
    ) {
      setSuccess('Collect', 'Collect indexed!')
    }
  }, [data])

  return (
    <>
      <a
        className={`${
          hide ? 'hidden' : ''
        } ml-auto text-sm font-medium static bottom-0 left-1`}
        href={`${BLOCK_EXPLORER_URL}tx/${txHash}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {loading ||
        (data?.hasTxHashBeenIndexed &&
          data?.hasTxHashBeenIndexed.__typename ===
            'TransactionIndexedResult' &&
          !data?.hasTxHashBeenIndexed.indexed) ? (
          <div className="flex items-center space-x-1.5">
            <div>{type} Indexing...</div>
          </div>
        ) : (
          <div className="flex items-center space-x-1">
            <div className="text-black dark:text-white">Index Successful!</div>
          </div>
        )}
      </a>
    </>
  )
}

export default TxStatus
