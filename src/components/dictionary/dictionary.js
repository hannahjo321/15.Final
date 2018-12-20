var defineApp = new Vue
export default {
  el: 'Dictionary',
  title: "Dictionary App!",
  components: {},
  props: [],
  data () {
    title: 'Dictionary',
    term: '',
    definitions: []
  }

  methods: {
    getDef(){
      fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + this.term + '?key=b104157c-816d-4dab-ba17-36f068499ffa')
      .then(data => data.json())
      .then( defs => {
        this.definition = definition.results;
      })
    }
  }
};
