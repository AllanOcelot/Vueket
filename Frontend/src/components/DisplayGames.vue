<template>
  <div class="games-container">
    <div class="intro">
      <h1>Games Supported:</h1>
    </div>
    <div class="pre-loader" v-if="loading">
      LOADING...  SO GET OVER IT
    </div>
    <div class="games" v-else>
      <div class="game" v-for="(item, index) in gamesData">
        <div class="bg" :style="`background-image:url(http://127.0.0.1:8090/api/files/games/${item.id}/${item.image})`"></div>
        <div class="cont">
          <p class="title">Title</p>
          <p class="info">
            <span class="title">Example</span>
            <span class="value">10,000</span>
          </p>
          <p class="info">
            <span class="title">Example</span>
            <span class="value">True</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang=ts>
  import { onMounted, ref } from 'vue'
  import type { Ref } from 'vue'

  const loading: Ref<boolean> = ref(true)
  const gamesData: Ref<[{}]>  = ref([{}])




  async function fetchGames(){
    try {
      console.log('Makinng middleware call to games')
      const response = await fetch('http://localhost:3000/api/games')
      if(!response.ok){
        throw new Error(`HTTP Error  ${response.status}`)
      }
      const data = await response.json()
      gamesData.value = data

      console.log(gamesData)
      loading.value   = false
    }catch(error){
      console.log('There was an error getting games')
    }
  }

  onMounted(function(){
    fetchGames()
  })


</script>  

<style lang="scss" scoped>
  .games-container {
    display: flex;
    flex-direction: column;
    flex: 1 auto;
    .intro {
      margin-bottom: 10px;
    }
    .games {
      display: grid;
      grid-template-columns: auto auto auto;
      .game {
        display: flex;
        flex-direction: column;
        .bg {
          background-color: #fff;
          width: 100%;
          height: 200px;
        }
        .cont {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>