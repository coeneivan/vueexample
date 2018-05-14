import types from './types'
import userService from './services/userservice'

const actions = {
  users: []
}

const getters = {
  [types.contactModule.getters.GetUsers]: (state) => { return state.users }
}

const mutations = {
  [types.contactModule.mutations.fillUsers]: (state, payload) => { state.users = payload }
}

const actions = {
  [types.contactModule.actions.GetUsersFromApi]: async (context) => {
    let response = await userService.getUsers()
    context.commit(types.contactModule.mutations.fillUsers, response.data)
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
