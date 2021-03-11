import ModalBootstrap from './../components/ModalBootstrap.vue';

export default {
    name: 'Pare',
    components: {
        ModalBootstrap
    },
    data() {
        return {
            quantitat: '',
            obert: true
        }
    },
    methods: {
        tancar() {
            this.quantitat = '';
        },
        acceptar() {
            this.quantitat = '';
            this.$emit('enviar');
        }
    },
    emits: [
        'enviar',
        'ocultar'
    ]
}