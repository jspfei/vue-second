<template>
  <div>
      <h4>{{msg}}</h4>
     <div>
        <p>
           Ask a yes/no question:
           <input v-model="question">
        </p>
       <p>{{ answer }}</p>
       <p>
         <img src="url" style="width:90px;height: 90px;">
       </p>
     </div>
  </div>
</template>

<script>
  import axios from "../../../../node_modules/axios"
  import lodash from "../../../../node_modules/lodash"
    export default {
        name: "",
       data(){
           return {
               msg:"虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。",
               question:'',
               answer:"I cannot give you an answer until you ask a question!",
               url:""
           }
       },
       watch:{
          //如果 `question` 发生改变，这个函数就会运行
          question:function (newQuestion,oldQuestion) {
             this.answer = 'Waiting for you to stop typing...'
             this.debouncedGetAnswer()
          }
       },
      created: function () {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
      },
       methods:{
           getAnswer:function () {
               if (this.question.indexOf('?') === -1){
                   this.answer = 'Questions usually contain a question mark.;-)'
                   return
               }
               this.answer = 'Thinking...'
               var vm = this;
               axios.get('https://yesno.wtf/api')
                 .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer);
                    vm.url = _.capitalize(response.data.image)
                 })
                 .catch(function (error) {
                    vm.answer = 'Error！Could not reach the API. '+error;
                 })
           }
       }
    }
</script>

<style scoped>

</style>
