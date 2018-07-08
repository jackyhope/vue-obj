import {
  login,
  logout
} from '@/api/login'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  createAccount,
  changePwd,
  getInfo
} from '@/api/user'
const user = {
  state: {
    token: getToken(),
    name: '',
    roles: [],
    userId: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERID: (state, id) => {
      state.userId = id
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const data = response.data
          setToken('test________________________');
          commit('SET_TOKEN', getToken()),
            resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 注册
    Register({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        register(userInfo).then(response => {
          const data = response.data
          commit('SET_TOKEN', getToken()),
            resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    ChangePwd({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        changePwd(info.oriPwd, info.newPwd, info.repeat).then(response => {
          // const data = response.data
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 创建账号
    CreateAccount({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        createAccount(info).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          commit('SET_ROLES', [data.userType])
          commit('SET_NAME', data.userAccount)
          commit('SET_USERID', data.userId)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
