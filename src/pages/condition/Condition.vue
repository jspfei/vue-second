<template>
   <div>
       <h2>{{msg}}</h2>
       <p>----------------------------------------------------</p>
       <h2>v-if</h2>
       <h3 v-if="ok">Yes</h3>
       <h3 v-else>No</h3>
       <template v-if="ok">
         <h1>Title</h1>
         <p>Paragraph 1</p>
         <p>Paragraph 2</p>
       </template>
       <div v-if="Math.random() > 0.5">
          Now you see me
       </div>
       <div v-else>
          Now you don't
       </div>
       <div v-if="type === 'A'">
          A
       </div>
       <div v-else-if="type=== 'B'">
          B
       </div>
       <div v-else-if="type === 'C'">
          C
       </div>
       <div v-else>
           Not A/B/C
       </div>
       <p></p>
       <template v-if="loginType === 'username'">
          <label>UserName</label>
          <input placeholder="Enter your username" key ="username-input">
       </template>
       <template v-else>
         <label>Email</label>
         <input placeholder="Enter your email address" key ="email-input">
       </template>
     <p>
       <button @click="toggleLoginType">Toggle login type</button>

     </p>
     <p>----------------------------------------------------</p>
     <h2>v-show</h2>
     <h1 v-show="ok">Hello!</h1>
      <p>不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。</p>
      <p>一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。</p>
     <p>----------------------------------------------------</p>
     <h2>v-if 与 v-for 一起使用</h2>
      <p>不推荐同时使用 v-if 和 v-for。
        当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级</p>
   </div>
</template>

<script>
    export default {
        name: "",
        data(){
           return{
               msg:"条件渲染",
               ok:true,
               type:'A',
               loginType:"username"
           }
        },
        methods:{
          toggleLoginType(){
               this.loginType = this.loginType === "username"?'email':'username';

          }
        }
    }
</script>

<style scoped>

</style>
