import { DEFAULT_PFP } from 'src/constants'

const displayPfp = (picture: any): string => {
  if (picture) {
    if (picture && picture.__typename === 'NftImage') {
      return picture.uri || DEFAULT_PFP
    } else {
      return picture.original
        ? picture.original.url.replace(
            'ipfs://',
            'https://lens.infura-ipfs.io/ipfs/'
          )
        : DEFAULT_PFP
    }
  } else {
    return DEFAULT_PFP
  }
}

export default displayPfp
