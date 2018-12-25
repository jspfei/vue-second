<template>
  <div>
    <h2>基础例子</h2>
    <div>
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <p>--------------------------------------------------------------</p>
    <h2>计算属性缓存 vs 方法</h2>
    <h6>计算属性是基于它们的依赖进行缓存的</h6>
    <h6>每当触发重新渲染时，调用方法将总会再次执行函数。</h6>
    <div>
      <p>Reversed message: "{{ reversedMessage1() }}"</p>
    </div>
    <p>--------------------------------------------------------------</p>
    <h2>计算属性 vs 侦听属性</h2>
    <p>{{fullName}}</p>
    <p>--------------------------------------------------------------</p>
    <h2>计算属性的 setter</h2>
    <h6>计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：</h6>
    <p>{{fullName}}</p>
    <p>--------------------------------------------------------------</p>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return {
        message:"Hello",
        firstName:"Foo",
        lastName:"Bar"
      }
    },
    computed:{
      // 计算属性的 getter
      reversedMessage(){
        return this.message.split('').reverse().join('')
      },
      fullName:{
        get() {
          return this.firstName + " " +this.lastName
        },
        set(newValue){
          let names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[1]
        }
      }
    },
    methods:{
      reversedMessage1:function(){
        return this.message.split('').reverse().join('')
      }
    }
  }
</script>

<style scoped>

</style>
