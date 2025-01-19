<template>
  <div class="page-container">
    <div class="hero-unit">
      <h1>Supported Games</h1>
      <p>We are always adding new games to our system</p>
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