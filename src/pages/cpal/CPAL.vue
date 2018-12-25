<template>
  <div>
    <h2>{{msg}}</h2>
    <router-link to="/cpal/attribute">计算属性</router-link>
    <router-link to="/cpal/listener">侦听器</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return {
        msg:"计算属性和侦听器"
      }
    }
  }
</script>

<style scoped>

</style>
