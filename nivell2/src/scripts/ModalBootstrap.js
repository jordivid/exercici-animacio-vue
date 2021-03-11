export default {
    name: 'ModalBootstrap',
    methods: {
        mostrarDialeg() {
            this.show = true;
            this.$emit('mostrar');
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