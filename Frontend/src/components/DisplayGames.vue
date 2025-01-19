<template>
  <div class="games-container">
    <div class="intro">
      <h1>Games Supported:</h1>
    </div>
    <div class="pre-loader" v-if="loading">
      LOADING...  SO GET OVER IT
    </div>
    <div class="games" v-else>
      <router-link class="game" v-for="(item, index) in gamesData" :to="`/games/${item.slug}`">
        <div class="bg" :style="`background-image:url(http://127.0.0.1:8090/api/files/games/${item.id}/${item.image})`"></div>
        <div class="cont">
          <p class="title">{{item.name}}</p>
        </div>
      </router-link>
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
      grid-template-columns: 1fr 1fr 1fr;
      .game {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        overflow: hidden;
        
        &:nth-child(1){
          justify-self: start;
          padding-right: 10px;
          margin-right: 10px;
        }
        &:nth-child(2){
          justify-self: center;
          padding: 0 10px;
        }
        &:nth-child(3){
          justify-self: right;
          padding-left: 10px;
        }


        .bg {
          background-color: #fff;
          width: 100%;
          height: 200px;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .cont {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>