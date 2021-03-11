<template>
    <div class="container mt-2 pb-2" id="llista">
        <div class="alert alert-danger w-100 mt-3" v-if="$store.getters.GetMovies.length == 0">No hi ha películes disponibles</div>
        <transition-group class="d-flex flex-wrap justify-content-between align-content-start" enter-active-class="animate__animated animate__bounceIn">
            <div class="card mt-2" v-for="SelectedMovie of $store.getters.GetMovies" :key="SelectedMovie.id">
                    <div v-if="$store.state.animation">
                        <div class="card-header">
                            <h5>{{SelectedMovie.title}}</h5>
                            <span>Available: {{SelectedMovie.available}}</span>
                        </div>
                        <div class="card-body d-flex align-items-center">{{SelectedMovie.description}}</div>
                    </div>
            </div>
        </transition-group>

    </div>
</template>

<script src="./../scripts/LlistaFilms.js"></script>

<style src="./../styles/LlistaFilms.css" scoped></style>