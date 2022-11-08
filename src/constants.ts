// eslint-disable-file no-useless-escape

export const APP_NAME = 'Lens Starter Dapp'

export const IS_MAINNET = process.env.NEXT_PUBLIC_IS_MAINNET === 'true'
export const IS_STAGING = process.env.NEXT_PUBLIC_IS_STAGING === 'true'

export const RELAYER_DISABLED =
  process.env.NEXT_PUBLIC_RELAYER_DISABLED === 'false'

export const SIGNIN_ERROR_MSG =
  'You need to sign in with your Lens profile first.'

export const WALLET_ERROR_MSG = 'You need to connect your wallet first.'

export const API_URL = IS_MAINNET
  ? IS_STAGING
    ? 'https://staging-api-social-polygon.lens.crtlkey.com/' // Staging mainnet
    : 'https://api.lens.dev/' // Prod mainnet
  : IS_STAGING
  ? 'https://staging-api-social-mumbai.lens.crtlkey.com/' // Staging testnet
  : 'https://api-mumbai.lens.dev/' // Prod testnet

export const CHAIN_ID = IS_MAINNET ? 137 : 80001

export const LENSHUB_PROXY_ADDRESS = IS_MAINNET
  ? '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d'
  : '0x60Ae865ee4C725cd04353b5AAb364553f56ceF82'

export const LENSTUBE_URL = IS_MAINNET
  ? 'https://lenstube.xyz'
  : 'https://testnet.lenstube.xyz'

export const LENSTER_URL = IS_MAINNET
  ? 'https://lenster.xyz'
  : 'https://testnet.lenster.xyz'

export const LENSFRENS_URL = IS_MAINNET
  ? 'https://lensfrens.xyz'
  : 'https://testnet.lensfrens.xyz'

export const BLOCK_EXPLORER_URL = IS_MAINNET
  ? 'https://polygonscan.com/'
  : 'https://mumbai.polygonscan.com/'

export const ERRORS: { [key: string]: string } = {
  generic: 'An error occured',
}

export const IPFS_GATEWAY = 'https://lens.infura-ipfs.io/ipfs/'

export const DEFAULT_PFP = 'path_to_your_default_pfp_file'
