const trimLongText = (text: string, stop?: number): string => {
  return text.length > (stop || 30) ? text.slice(0, stop || 30) + '...' : text
}

export default trimLongText
