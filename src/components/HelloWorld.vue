<template>
  <div>
    {{ msg | uppercaseFirst }}
    <div>{{ arr | locals }}</div>
    <my-com
    </my-common>mon>
      <div>{{ arr | arrs }}</div>
      <div>这是slot</div>
    <router-link :to="{ path: '/request', params: { name: 'yangxiaoning' } }">跳转到请求界面</router-link>
    <el-button type="primary" @click="show = true">弹框</el-button>
    <el-dialog width="40%" title="温馨提示" :visible.sync="show">
      <span>这是一段对话的提示信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="show = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-button v-order>这是自定义指令</el-button>
    <br/>
    <br/>
    <label for="relation">请选择：{{select}}</label>
    <input id="relation" type="checkbox" v-model="select">
    <label for="rlas">请选择：您已经选中{{radi}}</label>
    <input type="radio" v-model="radi" value="1" id="rlas">
    <input type="radio" v-model="radi" id="rlas" value="2">
    <h1>这是监听属性</h1>
    <div>
      <el-button  @click="reduce($event)" :disabled="bolen">-</el-button>
      <span>单价：{{goodsPrice}}</span><span>数量：{{num}}</span>
      <el-button @click="add">+</el-button>
    </div>
    <div>
      <span>总价钱：{{price}}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arr: "zhis is dog",
      world: "这是helloWorld的数据",
      show: false,
      sendData: "这是兄弟组件之间的传值",
      select:false,
      radi:'',
      num:1,
      price:'',
      goodsPrice:367,
      yang:"",
      bolen:''
    };
  },
  computed: {},
  directives: {
    order: {
      bind(el, binding) {
        return (el.style.color = "#e4393c");
      }
    }
  },
  mounted() {
    //公共
    this.comMethods.commo();
    //这是vuex的兄弟组件传值
    this.$store.state.hello = this.sendData;
  },
  methods:{
    add(){
      this.num++;
      this.bolen=false;
    },
    reduce(e){
      if(this.num!='1'){
        this.num--
      }
    }

  },
  watch:{
   num:{
     handler(newNum,oldNum){
       this.price=newNum*this.goodsPrice;
       if(newNum=='1'){
         this.bolen=true
       }
     },
     immediate:true
   }
  }
};
</script>

<style scoped></style>
