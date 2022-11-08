const omitKey = (object: { [key: string]: any }, key: string) => {
  const obj = JSON.parse(JSON.stringify(object))
  delete obj[key]
  return obj
}

export default omitKey
