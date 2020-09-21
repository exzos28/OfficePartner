export const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const replaceText = (s: string, n: number) => {
  const itsBigger = s.length > 20 ? '...' : ''
  return s.slice(0, n) + itsBigger
}
