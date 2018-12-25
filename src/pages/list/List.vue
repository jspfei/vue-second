<template>
  <div>
    <h2>{{msg}}</h2>
    <div class="box">
      <h3>用 v-for 把一个数组对应为一组元素</h3>
      <ul  >
        <li v-for="item in items">
          {{ item.message}}
        </li>
      </ul>
      <p>----------------------------------------------------------</p>
      <ul>
        <li v-for="(item, index) in items">
          {{parentMessage}} - {{index}} - {{item.message}}
        </li>
      </ul>
      <p>------------------------------------------------</p>
      <div v-for="item of items">
        {{item.message}}
      </div>
    </div>
    <div class="box">
      <h3>一个对象的 v-for</h3>
      <ul >
        <li v-for="value in object">
          {{value}}
        </li>
      </ul>
      <p>--------------------------------------</p>
      <div v-for="(value, key) in object">
        {{ key }}: {{ value }}
      </div>
      <p>--------------------------------------</p>
      <div v-for="(value, key, index) in object">
        {{ index }}. {{ key }}: {{ value }}
      </div>
    </div>
    <div class="box">
        <h3>key</h3>
      <div v-for="item in items" :key="index">
        <!-- 内容 -->
          {{item.message}}
      </div>
    </div>
    <div class="box">
        <h3>数组更新检测</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return {
        msg:"列表渲染",
        parentMessage:"Parent",
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        }
      }
    }
  }
</script>

<style scoped>
  .box{
    border-bottom: 2px solid grey ;
  }
</style>
