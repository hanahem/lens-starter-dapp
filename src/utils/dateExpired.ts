const dateExpired = (date: string): boolean => {
  let nextDay = new Date(new Date(date).setDate(new Date(date).getDate() + 1))
  return new Date() > nextDay
}

export default dateExpired
