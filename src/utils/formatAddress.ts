const shortAddress = (address: string): string => {
  return address.slice(0, 5) + '...' + address.slice(address.length - 4)
}

export default shortAddress
