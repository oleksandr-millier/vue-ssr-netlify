<template>
  <div id="app">
    <navbar />
    <router-view class="content"/>
  </div>
</template>

<script>
import '@/assets/style.scss'
import Navbar from '@/components/navbar'

export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.content {
  padding: 20px;
}
</style>
