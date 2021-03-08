<template>

<div class="container">
    <h1 class="mb-3">Cercador de películes</h1>
    <input type="text" class="form-control mb-3" placeholder="Introdueixi la seva cerca" v-model.trim="search" autofocus>

    <div class="d-flex justify-content-center">
        <div class="form-check mr-2">
            <label class="form-check-label">
                <input type="radio" class="form-check-input" name="optradio" :value="true" v-model="available">Disponible
            </label>
        </div>
        <div class="form-check ml-2">
            <label class="form-check-label">
                <input type="radio" class="form-check-input" name="optradio" :value="false" v-model="available">No Disponible
            </label>
        </div>
    </div>
</div>

</template>

<script src="./../scripts/CercadorFilms.js"></script>
<style src="./../styles/CercadorFilms.css" scoped></style>