<template >
    <div>
         <p>指令 (Directives) 是带有 v- 前缀的特殊特性。指令特性的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。回顾我们在介绍中看到的例子</p>
          <p v-if="seen">現在你看到我了</p>
          <h2>参数</h2>
           <div>
              <p>
                <a v-bind:href="url">......百度......</a>
              </p>
              <p>
                <a v-on:click="doSomething">点击</a>
              </p>
           </div>
           <h2>缩写</h2>
            <div>
                <p>
                  <!-- 缩写 -->
                  <a :href="url">......百度.....</a>
                </p>
              <p>
                <!-- 缩写 -->
                <a @click="doSomething">点击</a>
              </p>
            </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
           return {
               msg:"指令",
             seen:true,
             url:"https://www.baidu.com"
           }
        },
        methods:{
          doSomething(){
               this.seen  = false;
          }
        }
    }
</script>

<style scoped>

</style>
