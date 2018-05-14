export default {
  contactModule: {
    mutations: {
      fillUsers: 'MUT_FILL_USERS',
      fillUser: 'MUT_FILL_USER'
    },
    actions: {
      GetUsersFromApi: 'ACT_GET_ALLUSERSFROMAPI',
      GetUserFromApi: 'ACT_GET_USERFROMAPI'
    },
    getters: {
      GetUsers: 'GETTER_GET_USERS',
      GetUser: 'GETTER_GET_USER'
    }
  }
}
