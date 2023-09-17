<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import articulo from '@/components/articulo.vue';



interface carrito {
    id: number,
    userId: number,
    date: string,
    products: [
        productId: number,
        quantity: number
    ]
}

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

const karrito = ref<carrito>()
const errorServicio = ref<Boolean>(false)
const usuario = ref<Usuario>()
const articulos = ref<Array<articulo>>([])

const obtenerDatos = async () => {
    obtenerCarrito()
    
};

const obtenerArticulos = async (productId) => {
    try {
        const URL =  'https://fakestoreapi.com/products/' + productId
        const respuesta = await axios.get(URL)
        articulos.value.push(respuesta.data)
        console.log(articulos.value)
    } catch (error) {
        console.error(error.toJSON())
        errorServicio.value = true
    }
};



const obtenerCarrito = async () => {
    try {
        const respuesta = await axios.get('https://fakestoreapi.com/carts/5')
        karrito.value = respuesta.data
        console.log(karrito.value)
    } catch (error) {
        console.error(error.toJSON())
        errorServicio.value = true
    }
    try {
        const URL =  'https://fakestoreapi.com/users/' + karrito.value.userId
        const respuesta = await axios.get(URL)
        usuario.value = respuesta.data
        console.log(usuario.value)
    } catch (error) {
        console.error(error)
        errorServicio.value = true
    }
    for(let item of karrito.value.products){
        obtenerArticulos(item.productId)
    }
};
onMounted(obtenerDatos)
</script>

<template>
    <main>
        <section>
            <p v-if="errorServicio">Error al obtener informacion del carrito</p>
            <div v-else>
                <h1>
                    Carrito de {{ usuario?.name.firstname }}
                </h1>
                <ul>
                    <articulo v-for="articulo of articulos" :key="articulo.id" :articulo="articulo" />
                </ul>

            </div>
        </section>
    </main>
</template>
