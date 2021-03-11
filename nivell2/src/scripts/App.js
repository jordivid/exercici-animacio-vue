import HelloWorld from './../components/HelloWorld.vue'
import Pare from './../components/Pare.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Pare
  },
  methods: {
    mostrarAlerta() {
      this.mostrar = true;
    },
    amagarAlerta() {
      this.mostrar = false;
    }
  },
  data() {
    return {
      mostrar: false
    }
  }
}