import store from "../store";
import ModalBootstrap from './../components/ModalBootstrap.vue';

export default {
    name: 'Pare',
    components: {
        ModalBootstrap
    },
    data() {
        return {
            quantitat: '',
            muestra: false
        }
    },
    computed: {
        Show() {
            return store.getters.GetShowModal;
        }
    },
    methods: {
        tancar() {
            this.quantitat = '';
            this.SwitchShow();
            this.$emit('ocultar');
        },
        acceptar() {
            this.quantitat = '';
            this.SwitchShow();
            this.$emit('enviar');
        },
        SwitchShow() {
            store.commit('SwitchModal');
        }
    },
    emits: [
        'enviar',
        'ocultar'
    ]
}