<template >
  <div>
    <h2>文本</h2>
    <div>
      <p>Message:{{msg}}</p>
      <p v-once>这个将不会改变：{{msg}}</p>
    </div>
    <h2>原始Html</h2>
    <div>
      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>
    <h2>特性</h2>
    <div>
      <button v-bind:disabled="isButtonDisabled">Button</button>
    </div>
    <h2>使用 JavaScript 表达式</h2>
    <div>
      <p>{{ number + 1 }}</p>
      <p>{{ ok ? 'YES' : 'NO' }}</p>
      <p>{{ msg.split('').reverse().join('') }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return {
        msg:"插入文本",
        rawHtml:"<span style='color:red'>This should be red</span>",
        isButtonDisabled:null,
        ok:true,
        number:1
      }
    }
  }
</script>

<style scoped>

</style>
