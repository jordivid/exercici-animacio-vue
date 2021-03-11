<template>
    <div>
        <!-- Button to Open the Modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" @click="$emit('mostrar')">
        Open modal
        </button>

        <transition enter-active-class="animate__animated animate__bounceIn">
        <!-- The Modal -->
        <div class="modal" id="myModal">
            <div v-if="show" class="modal-dialog">
                <div class="modal-content">

                <!-- Modal Header -->
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
        </div>
        </transition>
    </div>
</template>

<script src="./../scripts/ModalBootstrap.js"></script>