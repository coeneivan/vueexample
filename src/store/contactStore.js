import types from './types'
import userService from './services/userservice'

const state = {
  users: [],
  user: {}
}

const getters = {
  [types.contactModule.getters.GetUsers]: (state) => { return state.users },
  [types.contactModule.getters.GetUser]: (state) => { return state.user }
}

const mutations = {
  [types.contactModule.mutations.fillUsers]: (state, payload) => { state.users = payload },
  [types.contactModule.mutations.fillUser]: (state, payload) => { state.user = payload }
}

const actions = {
  [types.contactModule.actions.GetUsersFromApi]: async (context) => {
    let response = await userService.getUsers()
    context.commit(types.contactModule.mutations.fillUsers, response.data)
  },
  [types.contactModule.actions.GetUserFromApi]: async (context, id) => {
    let response = await userService.getUser(id)
    context.commit(types.contactModule.mutations.fillUser, response.data)
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
