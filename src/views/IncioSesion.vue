<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { FakeStoreApe } from '@/assets/fakestoreape';

const conexion = new FakeStoreApe()

const usuario = ref<string>("")
const password = ref<string>("")
const sesionIniciada = ref<boolean>(false)

const enviarDatos = async () => {
    try {
        const respuesta:any = await conexion.iniciarSesion(usuario.value, password.value)
        if (respuesta) {
            sessionStorage.setItem("token", respuesta.token)
            alert("Inicio de sesion exitoso, ya puedes acceder a las demas paginas")
            sesionIniciada.value = true
        } else {
            alert("Inicio de sesion fallido")
        }
    } catch (error:any) {
        console.error(error.toJSON())
        alert("Error al iniciar sesion")
    }
}

onMounted(() => {
    if (sessionStorage.getItem("token") != null) {
        sesionIniciada.value = true
    }
})
</script>

<template>
    <h1 v-if="sesionIniciada">Ya hay una sesion activa =) </h1>
    <div v-else class="contenedor" >
        <form>
            <h1>Iniciar Sesion</h1>
            <label>
                Usuario:
                <input type="text" v-model="usuario">
            </label>
            <label>
                Contraseña:
                <input type="password" v-model="password">
            </label>
            <button type="button" @click="enviarDatos">Iniciar Sesion</button>
        </form>
    </div>
    
</template>

<style scoped>

.contenedor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 60px);
}

.contenedor form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 400px;
    min-width: 200px;
    background-color: var(--color-border-hover);
    border-radius: 10px;
    padding: 40px;

}
.contenedor form label {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
}

.contenedor form label input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 5px;
}

.contenedor form button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: var(--color-border-hover);
    color: var(--color-text);
    font-weight: 600;
    cursor: pointer;
}

.contenedor form button:hover {
    background-color: var(--color-text);
    color: var(--color-border-hover);
}

</style>