<template>
  <div class="container">
        <div id="areaNotificacions" :title="notificacio">{{notificacio}}</div>
        <div class="row">
            <div class="col-sm-12 col-md-4" id="formcard">
                <div class="card">
                    <div class="card-header">
                        <h3>Add A Product</h3>
                    </div>
                    <div class="card-body">
                        <form action="" id="formulari">
                            <input type="text" class="form-control" v-model.trim="product" placeholder="Product Name">
                            <input type="number" class="form-control" step="0.01" v-model.number="price" placeholder="Price">
                            <input type="date" class="form-control" v-model="fecha">
                            <input type="button" class="btn btn-default" @click="enviar" value="Enviar">
                        </form>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column col-sm-12 col-md-8" id="productList"></div>
        </div>
    </div>
</template>

<script src="./../scripts/formulari.js"></script>

<style src="./../styles/css/formulari.css" scoped></style>
