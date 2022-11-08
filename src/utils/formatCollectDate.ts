export const formatCollectDate = (date: string): string => {
  let nextDay = new Date(new Date(date).setDate(new Date(date).getDate() + 1))
  return `${nextDay.toLocaleDateString()} at
      ${nextDay.toLocaleTimeString()}`
}
