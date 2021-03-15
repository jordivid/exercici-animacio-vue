<template>
    <div>
        <button type="button" class="btn btn-primary" @click="SwitchShow">Obrir modal</button>
        <transition name="myanimation">
            <div class="dialog-background" v-if="Show">
                <div class="dialog-foreground">
                <div class="modal-header">
                    <slot name="header"></slot>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <slot name="body"></slot>
                    <p class="mt-2 mb-0 text-center">El canvi de {{cant | Inicializar}}€ en dòlars son {{cant | Convertir}}$</p>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script src="./../scripts/ModalBootstrap.js"></script>
<style src="./../styles/ModalBootstrap.css" scoped></style>