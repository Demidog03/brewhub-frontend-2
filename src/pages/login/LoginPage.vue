
<script setup lang="ts">
import TestComponent from '@/modules/test/TestComponent.vue';

</script>

<template>
 <TestComponent>
  <template #header>
    <h1>Login page header</h1>
  </template>
   <template #footer>
    <h1>Login page footer</h1>
  </template>
   <template #main>
    <h1>Login page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium animi doloremque pariatur, vel distinctio minus sapiente officia, voluptate vitae, recusandae molestiae amet. Autem esse quae, tenetur ex cupiditate nostrum molestiae.</p>
  </template>
 </TestComponent>
</template>

<style scoped></style>
