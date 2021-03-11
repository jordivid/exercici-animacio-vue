<template>
    <div>
        <div class="card-header">
            <h5>{{Pelicula.title}}</h5>
            <span>Available: {{Pelicula.available}}</span>
        </div>
        <div class="card-body d-flex align-items-center">{{Pelicula.description}}</div>
    </div>
</template>

<script src="./../scripts/Film.js"></script>
