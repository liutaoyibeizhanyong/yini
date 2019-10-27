import axios from "axios"
export function getShow(phone,password) {
  return axios.get(`https://net-music.penkuoer.com/login/cellphone?phone=${phone}&password=${password}`)
}
