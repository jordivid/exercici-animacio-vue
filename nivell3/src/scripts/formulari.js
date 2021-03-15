import  Product from "./product.js";
import $ from 'jquery'; 

export default {
    name: 'Formulari',
    data() {
        return {
            objectes: new Map(),
            indiceId: 0,
            product : "",
            price: "",
            fecha: null,
            notificacio: ""
        }
    },
    methods: {
        inicialitzar() {
            // Inicialització del formulari
            const avui = new Date();
            let dd = avui.getDate();
            let mm = avui.getMonth() + 1;
        
            if(mm < 9) {
                mm = "0" + mm;
            }
            if(dd < 9) {
                dd = "0" + mm;
            }
            this.fecha = avui.getFullYear() + "-" + mm + "-" + dd;
        
            this.product = "";
            this.price = "";
        },
        borrarNotificacio() {
            this.notificacio = "";
        },
        eliminar(e) {
            // S'elimina la ficha de producte de la llista i també l'objecte
            let producte = this.objectes.get(e.target.id);

            this.objectes.delete(e.target.id);
            $("#"+producte.id).animate({
                opacity: '0'
            }, 500, function() {
                producte.RemoveFromList();
            });

        },
        enviar() {
            // Es crea l'objecte Product, es valida i s'afegeix a la llista de productes
            let producte;
            let validation;
            let exist = false;
            
            if(this.product != "") {
                // for (let [clau, dades] of this.objectes) {
                for (let dades of this.objectes.values()) {
                    if(dades.Name.toLowerCase() == this.product.toLowerCase()) {
                        producte = dades;
                        producte.Price = this.price;
                        producte.Date = this.fecha;
                        producte.Code = producte.generateCode;
                        exist = true;
                        break;
                    }
                }
            }

            if(exist == false) {
                producte = new Product(this.product, this.price, this.fecha, "p" + (this.indiceId + 1));
            }

            validation = producte.Validate();

            if(validation == false) {
                return;
            }

            if(exist == true) {
                this.objectes.set("b" + producte.id, producte);
                producte.Update();
                this.inicialitzar();
                return;
            }

            ++this.indiceId;
            producte.AddToList();
            document.getElementById("b" + producte.id).addEventListener("click", this.eliminar);

            $("#"+producte.id).animate({
                opacity: '1'
            }, 500);


            this.objectes.set("b" + producte.id, producte);
            this.inicialitzar();
        }
    },
    created() {
        this.inicialitzar();
    }
}