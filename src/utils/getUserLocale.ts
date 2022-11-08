const getUserLocale = () => {
  const locale =
    navigator.languages && navigator.languages?.length
      ? navigator.languages[0]
      : navigator.language
  return 'en'
}

export default getUserLocale
