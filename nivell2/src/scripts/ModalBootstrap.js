import store from "../store";

export default {
    name: 'ModalBootstrap',
    computed: {
        Show() {
            return store.getters.GetShowModal;
        }
    },
    methods: {
        SwitchShow() {
            this.$emit('mostrar');
            store.commit('SwitchModal');
        }
    },
    filters: {
        Convertir(value) {
            const rate = 1.23;
            return (value * rate).toFixed(2);
        },
        Inicializar(value) {
            if (value == "") {
                value = 0;
            }
            return value;
        }
    },
    props: [
        'cant'
    ],
    emits: [
        'mostrar'
    ],
    data() {
        return {
            show: false
        }
    }
}