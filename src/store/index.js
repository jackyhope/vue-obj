import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import resume from './modules/resume'
import permission from './modules/permission'
import getters from './getters'
import 'es6-promise/auto'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    resume
  },
  getters
})

export default store
