<script setup lang="ts">
const props = defineProps<{
    persona: {
        type: any,
        required: true
    }
}>()
</script>
<template>
    <ul class="persona">
        <li>{{ props.persona.name.firstname }} {{ props.persona.name.lastname }}</li>
        <li>{{ props.persona.username }}</li>
        <li>{{ props.persona.email }}</li>
        <li>{{ props.persona.phone }}</li>
    </ul>
</template>

<style scoped>
.persona {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    border: 1px solid black;
    width: 200px;
    height: 200px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f2f2f288;
}
.persona:hover {
    background-color: #0000009a;
    color: blue;
}

.persona li {
    margin-bottom: 10px;
    list-style: none;
}

</style>