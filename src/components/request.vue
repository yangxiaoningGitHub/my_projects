<template>
  <div>
    <div>{{request}}</div>
    <button @click="gets">{{moreData}}</button>
    <button @click="add">mapAction</button>
    <button>{{values}}</button>
    <div>{{me | uppercaseFirst}}</div>
    <div>{{getData}}</div>
    <button>{{helloWorld}}</button>
    <el-button>{{mdf}}</el-button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    name: "request",
    data() {
      return {
        request: '这是请求界面',
        moreData: '更多数据',
        val: '',
        me:'yangxiaoning',
        mdf:'我是request的内容'
      }
    },
    mounted() {
      this.val = this.$route.query.name;
    },
    computed: {
      ...mapState({
        values: state => state.users,
        helloWorld:state=>state.hello
      }),
      ...mapGetters([
        'getData'
      ])
    },
    methods: {
      //mapActions
      ...mapActions({
        add: 'incrent'
      })
    }
  }
</script>

<style scoped>

</style>
