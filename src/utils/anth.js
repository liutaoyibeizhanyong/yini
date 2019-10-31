export function isLogin() {
  if(localStorage.getItem('token')){
    return true
  }
return false
}
export function setToken(token) {
  return localStorage.setItem('token',token )
}