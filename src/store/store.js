//公共的数据状态
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  //定义属性值
  state: {
    users: 'wanglinna',
    age: 30,
    hello:'',
    token:''
  },
  //属性值初始化  增删改擦定义的属性值
  getters: {
    getData(state) {
      return state.users;
    },
    getAge(state) {
      return state.age;
    }
  },
  //同步处理数据
  mutations: {
    list(state) {
      state.users = '这是mapAction'
    }
  },
  //异步数据处理
  actions: {
    incrent({commit}) {
      commit('list')
    }
  }
})
