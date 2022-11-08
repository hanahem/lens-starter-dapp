import { create } from 'ipfs-http-client'

const auth =
  'Basic ' +
  Buffer.from(
    process.env.NEXT_PUBLIC_INFURA_PID +
      ':' +
      process.env.NEXT_PUBLIC_INFURA_SECRET
  ).toString('base64')

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})

const uploadToIPFS = async (data: any) => {
  return await client.add(JSON.stringify(data))
}

export default uploadToIPFS
