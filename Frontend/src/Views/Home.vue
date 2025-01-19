<template>
  <div class="page-container">
    <div class="hero-unit">
      <h1>Welcome to Video Game Bounties!</h1>
      <p>Want to place a bounty on a player who wronged you, this is the place!</p>
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