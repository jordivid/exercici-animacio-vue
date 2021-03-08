<template>
    <transition
        enter-active-class="animated__bounceIn">
        <slot></slot>
    </transition>
</template>

<script src="./../../scripts/animations/Bounce.js"></script>
<style src="./../../styles/animations/Bounce.css" scoped></style>