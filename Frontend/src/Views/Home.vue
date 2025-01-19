<template>
  <div class="page-container">
    <div class="hero-unit">
      <h1>Welcome to Vuket</h1>
      <p>Wow, what an amazing website this is. I bet you are super impressed. Admit it.</p>
    </div>
    <DisplayGames />
  </div>

</template>
<script lang="ts" setup>
  import DisplayGames from '@/components/DisplayGames.vue'
</script>
<style lang="scss" scoped>
  .page-container {
    flex-direction: column;
  }
</style>