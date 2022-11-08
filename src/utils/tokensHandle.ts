import { Tokens } from '@generated/appTypes'
import Cookies from 'js-cookie'

export function tokensGet(): Tokens | null {
  if (
    Cookies.get('lens-tokens') !== null &&
    Cookies.get('lens-tokens') !== undefined
  ) {
    return JSON.parse(Cookies.get('lens-tokens') as string)
  } else {
    return null
  }
}

export function tokensSave(tokens: Tokens): void {
  Cookies.set('lens-tokens', JSON.stringify(tokens))
}

export function tokensClear(): void {
  Cookies.remove('lens-tokens')
}
