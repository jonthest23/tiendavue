<script setup lang="ts">
import axios from 'axios'
import { ref , onMounted } from 'vue'
import persona from '@/components/persona.vue';

interface Usuario {
    id: number,
    email: string,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string
    },
    adress: {
        street: string,
        number: number,
        city: string,
        zipcode: number,
        geolocation: {
            lat: number,
            long: number
        }
    },
    phone: string,
    }

const Usuarios = ref<Array<Usuario>>([])
const errorServicio = ref<Boolean>(false)

const obtenerUsuarios = async () => {
  if(sessionStorage.getItem("token") == null){
    errorServicio.value = true
    alert("No se ha iniciado sesion")
  }else{
  try {
    const respuesta = await axios.get('https://fakestoreapi.com/users')
    Usuarios.value = respuesta.data
  } catch (error:any) {
    console.error(error.toJSON())
    errorServicio.value = true
  }
}
};

onMounted(obtenerUsuarios)
</script>
<template>
  <main>
    <section>
      <h1>Usuarios</h1>
      <p v-if="errorServicio">Error al obtener los articulos</p>
      <div class="contenedor">
      <persona v-for="persona in Usuarios" :key="persona.id" :persona="persona" />
      </div>
    </section>
    
  </main>

</template>

<style scoped>
.contenedor {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

</style>