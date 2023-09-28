<script setup lang="ts">
import type { Articulo } from './interface/interface';

const props = defineProps<{
    articulo: Articulo
    eliminarArticulo: Function
    editarArticulo: Function
}>()

function eliminarArticulo () {
    props.eliminarArticulo(props.articulo.id)
}
function editarArticulo () {
    props.editarArticulo(props.articulo.id)
}

</script>
<template>
    <li class="Articulo">
        <div class="contenedorImagen">
            <img :src="props.articulo.image" :alt="props.articulo.title" />
        </div>
        <h2>{{ props.articulo.title }}</h2>
        <h2>{{ props.articulo.price }} $</h2>
        <div class="opciones">
        <button @click="eliminarArticulo">
            <span class="material-symbols-outlined">
                delete
            </span>
        </button>
        <button>
            <span class="material-symbols-outlined">
                edit
            </span>
        </button>
       </div>
    </li>
</template>

<style>
@import '../assets/base.css';

.Articulo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: 20px;
  padding: 1rem;
  border: 2px solid var(--color-border);
  border-radius: 10px;
  box-shadow: 0 0 10px var(--color-border);
  list-style: none;

}
.contenedorImagen {
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  overflow: hidden;
  text-align: center;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.contenedorImagen img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;

}

.opciones {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
}

.opciones button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    padding: 3px;
    transition: box-shadow 0.3s ease;
    color: var(--color-text);
    border-radius: 50%;
}

.opciones button:hover {
    box-shadow: 0 0 0 2px var(--color-text);
}

</style>