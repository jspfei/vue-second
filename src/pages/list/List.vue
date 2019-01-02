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
      <div >
        <h4>变异方法</h4>
        <ul>
          <li>
            push()
            pop()
            shift()
            unshift()
            splice()
            sort()
            reverse()
          </li>
        </ul>
      </div>
      <div>
        <h4>替换数组</h4>
        <ul>
          <li>
            filter(), concat() 和 slice()
          </li>
        </ul>
      </div>
      <div>
        <h4>注意事项</h4>
        <ul>
          <li> 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue</li>
          <li>当你修改数组的长度时，例如：vm.items.length = newLength</li>
          <li>通过一些方法实现相同的效果</li>
          <li>Vue.set(vm.items, indexOfItem, newValue)</li>
          <li>vm.items.splice(indexOfItem, 1, newValue)</li>
          <li>vm.items.splice(newLength)</li>
          <li>vm.items.splice(newLength)</li>
        </ul>
      </div>

    </div>
    <div class="box">
      <h3>对象更改检测注意事项</h3>
      <p>还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：</p>
      <p>
        var vm = new Vue({
        data: {
        a: 1
        }
        })
        // `vm.a` 现在是响应式的

        vm.b = 2
        // `vm.b` 不是响应式的
      </p>
      <p>可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性。</p>
      <p>Vue.set(vm.userProfile, 'age', 27)</p>
      <p>vm.$set(vm.userProfile, 'age', 27)</p>
      <p>有时你可能需要为已有对象赋予多个新属性</p>
      <p>vm.userProfile = Object.assign({}, vm.userProfile, {
        age: 27,
        favoriteColor: 'Vue Green'
        })
      </p>
    </div>
    <div class="box">
         <h3>显示过滤/排序结果</h3>
         <p>有时，我们想要显示一个数组的过滤或排序副本，而不实际改变或重置原始数据。在这种情况下，可以创建返回过滤或排序数组的计算属性。</p>
         <ul>
             <li>
           <li v-for="n in even(numbers)">{{ n }}</li>
             </li>
         </ul>
    </div>
    <div class="box">
        <h3>一个组件的 v-for</h3>
         <div id="todo-list-example">

             <form v-on:submit.prevent="addNewTodo">
                 <label for="new-todo">add a todo</label>
                 <input
                   v-model="newTodoText"
                   id="new-todo"
                   placeholder="E.g. Feed the cat"
                 >
               <button>add</button>
             </form>
           <ul>
              <li
                 is="todo-item"
                 v-for="(todo ,index) in todos"
                 v-bind:key="todo.id"
                 v-bind:title="todo.title"
                 v-on:remove="todos.splice(index,1)"
              >
              </li>
           </ul>
         </div>
    </div>
  </div>
</template>


<script>
  import Vue from 'vue'
  Vue.component('todo-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
    props: ['title']
  })
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
        },
        numbers: [ 1, 2, 3, 4, 5 ],
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Do the dishes',
          },
          {
            id: 2,
            title: 'Take out the trash',
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4
      }
    },
    methods:{
       even:function (numbers) {
          return numbers.filter(function (number) {
              return number % 2 === 0
          })
       },
      addNewTodo:function () {
          this.todos.push({
              id:this.nextTodoId++,
            title:this.newTodoText
          })
          this.newTodoText=''
      }
    }
  }
</script>

<style scoped>
  .box{
    border-bottom: 2px solid grey ;
  }
</style>
