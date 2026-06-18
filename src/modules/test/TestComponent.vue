<script setup lang="ts">
</script>

<template>
 <header>
    <h1 class="test-heading">Header</h1>
    <slot name="header" >
      <p>Header slot</p>
    </slot>
 </header>
 <main>
    <h1 class="test-heading">Main</h1>
    <slot name="main" >
      <p>Main slot</p>
    </slot>
 </main>
 <footer>
    <h1 class="test-heading">Footer</h1>
    <slot name="footer" >
      <p>Footer slot</p>
    </slot>
 </footer>
</template>

<style scoped>
.test-heading {
  color: rgb(130, 130, 130);
}
</style>
