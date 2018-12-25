<template>
    <div>
        <h2>{{title}}</h2>
        <ul>
          <div v-for="list in lists">
            <router-link  class="button" v-bind:to="{name:list.path}">{{list.name}}</router-link>
          </div>
        </ul>
    </div>
</template>

<script>
  import DataList from "@/source/DataList"
export default {
  name: '',
  data () {
    return {
      title: 'Vue 实例',
      lists:DataList.dataList
    }
  }
}
</script>
<style>
  .button{
     width:500px;
     height: 50px;
     line-height: 50px;
     color:black;
  }


</style>
