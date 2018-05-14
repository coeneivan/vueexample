import { mapGetters, mapActions } from "vuex";
import types from "../../store/types";

export default {
  name: 'contactlist',
  props: [],
  mounted () {
    this.getUsers()
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions({
      getUsers: types.contactModule.actions.GetUsersFromApi
    })
  },
  computed: {
    singleContactLink: () => {
      return {
        name: 'singleContact',
        params: {id: this.id}
      }
    },
    ...mapGetters({
      contacts: types.contactModule.getters.GetUsers
    })
  }
}
