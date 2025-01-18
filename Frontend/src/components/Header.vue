<script setup lang="ts">
</script>

<template>
  <header>
    <div class="page-container">
      <router-link to="/home" class="logo">Vuket</router-link>
      <nav>
        <router-link to="/games" >Games</router-link>
        <router-link to="/bounties" >Bounties</router-link>
        <router-link to="/login" >Login</router-link>
        <router-link to="/register" >Register</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    display: flex;
    flex: 1 auto;
    flex-direction: row;
    border-bottom: 1px solid rgba(255,255,255,.2);
    padding: 10px 0;

    a {
      margin-left: 20px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #fff;
      opacity: .6;
      transition: all .2s;
      &:hover {
        opacity: 1;
        text-decoration: underline;
      }
    }

    .logo {
      display: inline-flex;
      margin: auto auto auto 0;
    }
    nav {
      display: inline-flex;
      margin: auto 0 auto auto;
    }
  }
</style>
