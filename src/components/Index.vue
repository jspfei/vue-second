<template>
    <div>
        <h2>{{title}}</h2>
        <ul>
          <li v-for="list in lists">
            <router-link  class="button" v-bind:to="{name:'{{list.path}}'}">{{list.name}}</router-link>
          </li>
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
     background-color: grey;
     color:#ffffff;
  }


</style>
