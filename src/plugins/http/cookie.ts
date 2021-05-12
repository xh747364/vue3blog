import Cookies from 'js-cookie';

const TokenKey = 'token'
const RefreshTokenKey = 'refresh-token'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function getTokenKey() {
  return TokenKey
}
export function getRefreshTokenKey() {
  return RefreshTokenKey
}

export function setToken(token: any) {
  return Cookies.set(TokenKey, token)
}

export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey)
}

export function setRefreshToken(refreshToken: any) {
  return Cookies.set(RefreshTokenKey, refreshToken)
}

export function removeToken() {
  Cookies.remove(TokenKey)
  Cookies.remove(RefreshTokenKey)
}