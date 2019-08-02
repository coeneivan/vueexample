export default {
  name: 'footer',
  components: {},
  props: [],
  data () {
    return {
      v: null
    }
  },
  computed: {

  },
  mounted () {
    this.$root.$on('valid', this.handleValidation)
  },
  methods: {
    handleValidation (valid) {
      console.log(`VALID`)
      this.v = valid
    }
  }
}
