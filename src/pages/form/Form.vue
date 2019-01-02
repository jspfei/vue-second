<template>
  <div>
    <h2>{{msg}}</h2>
    <div class="box">
      <h3>基本用法</h3>
      <p>用 v-model 指令在表单 input、textarea 及 select 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。</p>
      <div>
        <h4>文本</h4>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
      </div>
      <div>
        <h4>多行文本</h4>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <br>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
      </div>
      <div>
          <h4>复选框</h4>
          <input type="checkbox" id="checkbox" v-model="checked">
          <label for="checkbox">{{checked}}</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return {
        msg:"表单输入绑定",
        message:""
      }
    }
  }
</script>

<style scoped>
  .box{
    border-bottom: 2px solid gray;
  }
</style>
