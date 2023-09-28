<script setup lang="ts">
import { ref, onMounted } from 'vue'
import articulo from '@/components/articulo.vue';
import type { Articulo } from '@/components/interface/interface';
import type { carrito } from '@/components/interface/interface';
import type { Usuario } from '@/components/interface/interface';
import { FakeStoreApe } from '@/assets/fakestoreape';

const karrito = ref<carrito>()
const errorServicio = ref<Boolean>(false)
const usuario = ref<Usuario>()
const articulos = ref<Array<Articulo>>([])
const conexion = new FakeStoreApe()
const obtenerDatos = async () => {
    obtenerCarrito()
    
};

const obtenerArticulos = async (productId: number) => {
    try {
        const respuesta = await conexion.obtenerArticulo(productId)
        articulos.value.push(respuesta)
        console.log(articulos.value)
    } catch (error:any) {
        console.error(error.toJSON())
        errorServicio.value = true
    }
};



const obtenerCarrito = async () => {
    try {
        const respuesta = await conexion.obtenerCarrito(5)
        karrito.value = respuesta
        console.log(karrito.value)
    } catch (error:any) {
        console.error(error.toJSON())
        errorServicio.value = true
    }
    if (karrito.value) {
        try {
            const respuesta = await conexion.obtenerUsuario(karrito.value.userId)
            usuario.value = respuesta
            console.log(usuario.value)
        } catch (error) {
            console.error(error)
            errorServicio.value = true
        }
        console.log(usuario.value)
        for (let item of karrito.value.products) {
            obtenerArticulos(item.productId)
        }

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
                    <articulo v-for="articulo of articulos" :key="articulo.id" :articulo="articulo" :eliminarArticulo="conexion.eliminarArticulo" :editarArticulo="conexion.editarArticulo"/>
                </ul>

            </div>
        </section>
    </main>
</template>
