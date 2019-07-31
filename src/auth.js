import axios from 'axios'

const BASE_URL = 'https://reqres.in/api/'

export default {
  sendRequest () {
    let axiosInstace = axios.create({
      baseURL: BASE_URL
    })
    return axiosInstace
  }
}
