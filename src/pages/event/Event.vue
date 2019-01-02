<template>
  <div>
    <h2>{{msg}}</h2>
    <div class="box">
      <h3>监听事件</h3>
      <button v-on:click="counter += 1">add</button>
      <p>{{counter}} times</p>
    </div>
    <div class="box">
      <h3>事件处理方法</h3>
      <button v-on:click="greet">Greet</button>
    </div>
    <div class="box">
      <h3>内联处理器中的方法</h3>
      <button v-on:click="say('hi')"> Say Hi</button>
      <button v-on:click="say('what')">Say what</button>
      <p>-----------------------------------------------</p>
      <p>有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法：</p>
      <button v-on:click="warn('Form cannot be submitted yet.', $event)">
        Submit
      </button>
    </div>
    <div class="box">
      <h3>事件修饰符</h3>
      <p>方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。</p>
      <ul>
        <li>
          .stop
          .prevent
          .capture
          .self
          .once
          .passive</li>
      </ul>

      <div>
        <!-- 阻止单击事件继续传播 -->
        <a v-on:click.stop="doThis"></a>

        <!-- 提交事件不再重载页面 -->
        <form v-on:submit.prevent="onSubmit"></form>

        <!-- 修饰符可以串联 -->
        <a v-on:click.stop.prevent="doThat"></a>

        <!-- 只有修饰符 -->
        <form v-on:submit.prevent></form>

        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
        <div v-on:click.capture="doThis">...</div>

        <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
        <!-- 即事件不是从内部元素触发的 -->
        <div v-on:click.self="doThat">...</div>
        <!-- 点击事件将只会触发一次 -->
        <a v-on:click.once="doThis"></a>
        <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
        <!-- 而不会等待 `onScroll` 完成  -->
        <!-- 这其中包含 `event.preventDefault()` 的情况 -->
        <div v-on:scroll.passive="onScroll">...</div>
      </div>
    </div>
    <div class="box">
      <h3>按键修饰符</h3>
      <!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
      <input v-on:keyup.13="submit">
      <input v-on:keyup.enter="submit">
      <input @keyup.enter="submit">
      <ul>
        <li>
          .enter
          .tab
          .delete (捕获“删除”和“退格”键)
          .esc
          .space
          .up
          .down
          .left
          .right
        </li>
      </ul>
      <div>
        <h4>自动匹配按键修饰符</h4>
        <p>你也可直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符：</p>
        <p>
          <input @keyup.page-down="onPageDown"></p>
      </div>
    </div>
    <div class="box">
      <h3>系统修饰键</h3>
      <p>可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。</p>
      <ul>
        <li>
          .ctrl
          .alt
          .shift
          .meta</li>
      </ul>
      <!-- Alt + C -->
      <input @keyup.alt.67="clear">

      <!-- Ctrl + Click -->
      <div @click.ctrl="doSomething">Do something</div>
      <p>-------------------------------------------</p>
      <h4>.exact 修饰符</h4>
      <p>.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。</p>
      <div>
        <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
        <button @click.ctrl="onClick">A</button>

        <!-- 有且只有 Ctrl 被按下的时候才触发 -->
        <button @click.ctrl.exact="onCtrlClick">A</button>

        <!-- 没有任何系统修饰符被按下的时候才触发 -->
        <button @click.exact="onClick">A</button>
      </div>
      <h4>鼠标按钮修饰符</h4>
      <ul>
        <li>.left
          .right
          .middle</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return {
        msg:"事件处理",
        counter:0
      }
    },
    methods:{
      greet:function (event) {
        if (event){
          alert(event.target.tagName);
        }
      },
      say:function (msg) {
        alert(msg)
      },
      warn:function (message,event) {
        if (event) event.preventDefault();
        alert(message)
      },
      onCtrlClick:function () {
        alert("only ctrl")
      },
      onClick:function () {
        alert("have ctrl")
      }
    }
  }
</script>

<style scoped>
  .box{
    border-bottom: 2px solid grey ;
  }
</style>
