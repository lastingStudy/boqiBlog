import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        close:true,
        name:'未登录',
        show:true,
        userState:false,
        id:''
    },
    mutations:{
        negate(state){
            state.close = !state.close
            state.userState = !state.userState
        },
        setname(state,n){
            state.name = n
        },
        setId(state,id){
            state.id = id
        },
        logout(state) {
            state.close = !state.close
            state.userState = !state.userState
            state.name = '未登录';
          },
    }
})

export default store