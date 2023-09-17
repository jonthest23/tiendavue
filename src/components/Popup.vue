<script setup lang="ts">
import { allowedNodeEnvironmentFlags } from 'process';
import { ref , onMounted } from 'vue'

const props = defineProps<{
    togglePopup: Function,
    enviarArticulo: Function,
    Articulo: {
        type: any
        required: true
    }
}>()
function validacion () {
    if (props.Articulo.title == undefined || props.Articulo.price == undefined || props.Articulo.image == undefined || props.Articulo.category == undefined || props.Articulo.description == undefined) {
        alert("no se puede agregar el articulo")
    } else {
        props.enviarArticulo(props.Articulo)
    }
}

 
</script>

<template>
    <div class="popup">
        <div class="popup_inner">
            <form @submit.prevent="validacion">
                <div>
                    <label>agregar nuevo articulo</label>
                    <button type="button" @click="props.togglePopup" >
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>
                <input type="text" placeholder="nombre del articulo"  v-model="props.Articulo.title"/>
                <input type="text" placeholder="precio" v-model="props.Articulo.price" />
                <input type="text" placeholder="imagen" v-model="props.Articulo.image"/>
                <input type="text" placeholder="categoria" v-model="props.Articulo.category" />
                <input type="text" placeholder="descripcion" v-model="props.Articulo.description"/>
                <button type="submit">agregar</button>
            </form>
        </div>
    </div>
</template>
<style scoped>
.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup_inner {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    width: 320px;
}

.popup_inner form {
    display: flex;
    flex-direction: column;
}

.popup_inner form input {
    margin-bottom: 10px;
}

.popup_inner form div label {
    font-size: 1.2rem;
    font-weight: 500;
    color: black;

}

.popup_inner form div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

}

.popup_inner form div button{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    padding: 0;
    border-radius: 50%;
    box-shadow: 0 0 0 1px var(--color-text);
    color: red;
}

.popup_inner form div button:hover{
    background-color: red;
    color: white;
}

.popup_inner form input {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    padding: 5px;
}

</style>
