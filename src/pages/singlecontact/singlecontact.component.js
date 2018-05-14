import { mapGetters, mapActions } from "vuex";
import types from "../../store/types";

export default {
  name: 'singlecontact',
  props: [],
  mounted () {
    this.getUser(this.$route.params.id)
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions({
      getUser: types.contactModule.actions.GetUserFromApi
    })
  },
  computed: {
    ...mapGetters({
      user: types.contactModule.getters.GetUser
    })
  }
}
