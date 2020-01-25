<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data (){
      return {
        name:'我是cpn的内容'
      }
    }
  }
</script>

<style scoped>

</style>