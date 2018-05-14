import axios from 'axios'
import config from '../../../static/config'

export default {
  getUsers: async () => {
    return axios.get(`${config.API}/users`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  getUser: async (id) => {
    return axios.get(`${config.API}/users/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  postUser: (user) => { /* ... */ }
}
