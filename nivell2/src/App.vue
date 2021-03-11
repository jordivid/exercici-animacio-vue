<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Pare @enviar="mostrarAlerta" @ocultar="amagarAlerta">
      <div class="alert alert-info" v-if="mostrar === true">Heu tancat el modal</div>
    </Pare>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script src="./scripts/App.js"></script>

<style src="./styles/App.css"></style>
