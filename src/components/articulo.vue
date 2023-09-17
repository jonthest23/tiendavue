<script setup lang="ts">

interface Articulo {
    id: number,
    title: string,
    price: number,
    image: string,
    category: string,
    description: string
}


const props = defineProps<{
    articulo: {
        type: Array<Articulo>,
        required: true
    }
}>()

</script>
<template>
    <li class="Articulo">
        <div>
        <img :src="props.articulo.image" :alt="props.articulo.title" />
        </div>
        <h2>{{ props.articulo.title }}</h2>
        <p>{{ props.articulo.price }}</p>
    </li>
</template>
