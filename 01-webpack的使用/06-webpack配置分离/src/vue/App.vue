<!--通过这个文件，可以将每个属性写到每个对应的标签中-->
<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btn_click">按钮</button>
    <h2>{{name}}</h2>
<!--    在这个地方调用子组件的标签-->
    <Cpn></Cpn>
  </div>
</template>

<script>
  //导入别的地方的vue文件，将cpn组件插入到这个组件中，成为子组件
  import Cpn  from './Cpn.vue'

  export default {
    name: "App",
    //插入子组件
    components:{
      Cpn
    },
    data () {
      return {
        message:'Hello',
        name:'young',
      }
    },
    methods:{
      btn_click () {
        console.log('works!')
      }
    }
  }
</script>

<style scoped>
  .title {
    color:red;
  }
</style>