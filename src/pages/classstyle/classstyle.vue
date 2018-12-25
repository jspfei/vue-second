<template>
    <div>
        <h2>{{msg}}</h2>
        <h2>绑定 HTML Class</h2>
        <h2>对象语法</h2>
        <div style="text-align: center;left:300px;">
             <div class="static" v-bind:class="{ active: isActive , 'text-danger':error}"></div>
             <div class="static" v-bind:class="classObject"></div>
        </div>
        <p>-----------------------------------------</p>
        <h2>数组语法</h2>
        <div class="static" v-bind:class="[activeClass,errorClass]"></div>
      <p>-----------------------------------------</p>
       <h2>绑定内联样式</h2>
       <h2>对象语法</h2>
       <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">测试</div>
       <div v-bind:style="styleObject"></div>
        <p>-----------------------------------------</p>
        <h2>数组语法</h2>
        <div v-bind:style="[styleObject, overridingStyles]">数组</div>
        <p>-----------------------------------------</p>
        <h2>多重值</h2>
        <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return {
               msg:"Class 与 Style 绑定",
               isActive:true,
               error :null,
               activeClass:'active',
               errorClass:'text-danger',
              activeColor:'red',
              fontSize:30,

            }
        },
      computed:{
        classObject:function () {
           return {
               active :this.isActive && !this.error,
               'text-danger':this.error && this.error.type === 'fatal'
           }
        },
        styleObject:function () {
           return {
               color:'red',
               fontSize: '13px'
           }
        },
        overridingStyles:function () {
          return {
            color:'yellow',
            fontSize: '23px'
          }
        }
      }
    }
</script>

<style scoped>
  .static{
    width: 200px;
    height:60px;
    background-color: pink;
  }
</style>
