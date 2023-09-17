<script setup lang="ts">
import axios from 'axios'
import { ref , onMounted } from 'vue'
import articulo from '@/components/articulo.vue';
import Popup from '@/components/Popup.vue';


const articulos = ref<Array<articulo>>([])
const errorServicio = ref<Boolean>(false)
  interface articulo {
    id: number,
    title: string,
    price: number,
    image: string,
    category: string,
    description: string
}

const Articulo = ref<articulo>({})

const obtenerArticulos = async () => {
  try {
    const respuesta = await axios.get('https://fakestoreapi.com/products')
    articulos.value = respuesta.data
  } catch (error) {
    console.error(error.toJSON())
    errorServicio.value = true
  }
};



function togglePopup() {
  const popup = document.querySelector('.popup')
  popup.classList.toggle('nonactive')
};

const enviarArticulo = async (articulo:articulo) => {
  togglePopup()
  try {
    const respuesta = await axios.post('https://fakestoreapi.com/products', articulo)
    console.log(respuesta.data)
    alert("se agrego el articulo satisfactoriamente =)")
  } catch (error) {
    console.error(error.toJSON())
  }
  
};
onMounted(obtenerArticulos)

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
        <articulo v-for="articulo in articulos" :key="articulo.id" :articulo="articulo" />
      </ul>
      
    </section>
    <Popup :Articulo="Articulo" :enviarArticulo="enviarArticulo" :togglePopup="togglePopup" class="nonactive"/>
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