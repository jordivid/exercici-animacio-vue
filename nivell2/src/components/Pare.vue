<template>
    <div>
        <slot></slot>
        <ModalBootstrap :show="muestra" :cant="quantitat" @mostrar="$emit('ocultar')">
            <template #header>
                <h4 class="modal-title">Conversor de moneda</h4>
                <button type="button" class="btn btn-sm btn-secondary" @click="tancar">&times;</button>
            </template>

            <template #body>
                <h3>Introduir quantitat</h3>
                <input type="number" class="text-right" step="0.1" v-model.number="quantitat">
            </template>
            
            <template #footer>
                <button type="button" class="btn btn-secondary" @click="tancar">Tancar</button>
                <button type="button" class="btn btn-primary" @click="acceptar">Enviar</button>
            </template>
        </ModalBootstrap>
    </div>
</template>

<script src="./../scripts/Pare.js"></script>