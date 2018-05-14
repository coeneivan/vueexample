import axios from 'axios'
import config from '../../../static/config'

export default {
  getUsers: () => {
    return axios.get(`${config.API}/users`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  getUser: (id) => { /* ... */ },
  postUser: (user) => { /* ... */ }
}
