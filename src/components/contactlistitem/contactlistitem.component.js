import { mapGetters } from 'vuex'
import types from '../../store/types'
export default {
  name: 'contactlistitem',
  props: [],
  mounted () {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {
    ...mapGetters({
      contacts: types.contactModule.getters.GetUsers
    })
  }
}
