export default {
  template:`
<!--      要用div包裹-->
    <div>
      <h2>{{message}}</h2>
      <button @click="btn_click">按钮</button>
      <h2>{{name}}</h2>
    </div>
  `,
  data () {
    return {
      message:'Hello',
      name:'young'
    }
  },
  methods:{
    btn_click () {
      console.log('works!')
    }
  }
}
//总结：这种js文件方式还是会导致混乱，改而用vue文件