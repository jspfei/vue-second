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
      <div>
         <h4>单选按钮</h4>
         <input type="radio" id="one" value="One" v-model="picked">
         <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked:{{ picked }}</span>
      </div>
      <div>
         <h4>选择框</h4>
          <h5>单选时</h5>
          <select v-model="selected">
              <option disabled value="">请选择</option>
              <option>A</option>
               <option>B</option>
               <option>C</option>
          </select>

          <span>Selected:{{ selected}}</span>
          <br>
           <select v-model="selected">
              <option v-for="option in options" v-bind:value="option.value">
                 {{option.text}}
              </option>
           </select>
         <span>Selected: {{ selected }}</span>
        <br>
        <h5>多选时</h5>
         <select v-model="selecteds" multiple style="width:50px">
           <option>A</option>
           <option>B</option>
           <option>C</option>
         </select>
        <span>Selected:{{ selecteds}}</span>
      </div>
    </div>
    <div class="box">
      <h3>值绑定</h3>
      <!-- 当选中时，`picked` 为字符串 "a" -->
      <input type="radio" v-model="picked" value="a">

      <!-- `toggle` 为 true 或 false -->
      <input type="checkbox" v-model="toggle">

      <!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
      <select v-model="selected">
        <option value="abc">ABC</option>
      </select>
      <h4>多选框</h4>
      <input
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no"
      >
      <h4>单选按钮</h4>
      <input v-model.lazy="msg" >
      <input v-model.number="age" type="number">
      <input v-model.trim="msg">
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return {
        msg:"表单输入绑定",
        message:"",
        picked:"",
        selected:"A",
        selecteds:[],
        pick:"a",
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ]
      }
    }
  }
</script>

<style scoped>
  .box{
    border-bottom: 2px solid gray;
  }
</style>
