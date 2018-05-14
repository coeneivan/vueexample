import axios from 'axios'
import config from '../../../static/config'

export default {
  getUsers: async () => {
    return axios.get(config.API, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  getUser:(id) => { /* ... */ },
  postUser: (user) => { /* ... */ },
}