<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    <nav>
      <button class="botonnv">
        <RouterLink to="/ArticulosView">Articulos</RouterLink>
      </button>
      <button class="botonnv">
        <RouterLink to="/UsuariosView">Usuarios</RouterLink>
      </button>
    </nav>
    <button id="carrito">
      <RouterLink to = "/CarritoView">
        <span class="material-symbols-outlined">shopping_cart</span>
      </RouterLink>
    </button>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid;
}


.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  font-size: 2rem;
  color: var(--color-text);
}

#carrito {
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  padding: 0;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  box-shadow: 0 0 0 1px var(--color-text);
  transition: box-shadow 0.3s ease;
}

#carrito:hover {
  box-shadow: 0 0 0 2px var(--color-text);
}
</style>
