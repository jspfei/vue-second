<template>
    <div>
      <h2>{{msg}}</h2>
      <router-link to="/template/interpolation">插值</router-link>
      <router-link to="/template/instructions">指令</router-link>
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
            msg:"模板语法"
          }

      }
    }
</script>

<style scoped>

</style>
