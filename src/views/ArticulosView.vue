<script setup lang="ts">
import { ref , onMounted } from 'vue'
import articulo from '@/components/articulo.vue';
import Popup from '@/components/Popup.vue';
import type { Articulo } from '@/components/interface/interface';
import {FakeStoreApe} from '../assets/fakestoreape'

const conexion = new FakeStoreApe()

const articulos = ref<Array<Articulo>>([])
const errorServicio = ref<Boolean>(false)
  interface articulo {
    id: number,
    title: string,
    price: number,
    image: string,
    category: string,
    description: string
}

const Articulo = ref<articulo>({
    id: 0,
    title: "",
    price: 0,
    image: "",
    category: "",
    description: ""
})

function enviarArticulo(articulo: articulo) {
  conexion.enviarArticulo(articulo)
  togglePopup()
}

const obtenerArticulos = async () => {
  try {
    const respuesta = await conexion.obtenerArticulos()
    articulos.value = respuesta
  } catch (error) {
    console.error(error)
    errorServicio.value = true
  }
};



function togglePopup() {
  const popup: Element | null = document.querySelector('.popup')
  if (!(popup == null)) {
    popup.classList.toggle('nonactive')
  }
};


onMounted(() => {
  obtenerArticulos()
})



</script>

<template>
  <main>
    <section>
      <div class=" subtitulo_boton">
      <h1>Articulos</h1>
      <button @click="togglePopup">agregar producto</button>
     </div>
      <p v-if="errorServicio">Error al obtener los articulos</p>
      <ul v-else>
        <articulo v-for="articulo in articulos" :key="articulo.id" :articulo="articulo" :eliminarArticulo="conexion.eliminarArticulo" />
      </ul>
      
    </section>
    <Popup  :Articulo="Articulo" :enviarArticulo="enviarArticulo" :togglePopup="togglePopup" class="nonactive" v-if="Articulo"/>
  </main>

</template>
<style scoped>
ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 0;
}
section {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-right: 40px;
  justify-content: center;
}
h1 {
  font-size: 2rem;
  font-weight: 400;
}


.subtitulo_boton button{
  background-color: #1E90FF;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}
.nonactive {
  display: none;
}
</style>
```