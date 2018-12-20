var thesaurusApp = new Vue
export default {
  el: 'Thesaurus',
  title: "Thesaurus App!",
  components: {},
  props: [],
  data () {
    title: 'Thesaurus',
    term: '',
    definitions: []
  }

  methods: {
    getDef(){
      fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + this.term + '?key=b104157c-816d-4dab-ba17-36f068499ffa')
      .then(data => data.json())
      .then( syns => {
        this.synonyms = synonyms.results;
      })
    }
  }
};
