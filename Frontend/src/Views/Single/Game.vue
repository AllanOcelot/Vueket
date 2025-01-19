<template>
  <div class="page-container">
    <div class="hero-unit">
      <h1>You are viewing - </h1>
      <p>Want to place a bounty on a player who wronged you, this is the place!</p>
    </div>
  </div>

</template>
<script lang="ts" setup>
  import { ref, watch, onMounted } from 'vue'
  import type { Ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route  = useRoute()
  const gameID = route.params.id 

  const game:     Ref<{}>      = ref({})
  const loading:  Ref<boolean> = ref(true)


  async function fetchGameData(id){
    loading.value = true
    try {
      const response = await fetch(`http://localhost:3000/api/games/records/${id}`)
      if(!response.ok) throw new Error ('We failed to get the data for the game.')
      game.value = response.data.json()
    }catch(error){
      console.error('Failed to fetch game')
    } finally {
      loading.value = false
    }
  }



  onMounted(() => {
    fetchGameData(gameID.value)
  })

  watch(() => route.params.id, (newId) => {
    gameID.value = newId
    fetchGameData(newId)
  })

</script>
<style lang="scss" scoped>
  .page-container {
    flex-direction: column;
  }
</style>