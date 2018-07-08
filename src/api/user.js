import request from '@/utils/request'

// 修改密码
export function changePwd(loginPass, newPwd, confirmPwd) {
  return request({
    url: '/user/modifyAccountPwd',
    method: 'post',
    data: {
      loginPass, newPwd, confirmPwd
    }
  })
}
// 获取用户信息
export function getInfo(token) {
  return request({
    url: '/user/findAccount',
    method: 'get',
    params: { token }
  })
}

// 创建账号
export function createAccount(info) {
  return request({
    url: '/user/addAccount',
    method: 'post',
    data: info,
    handleError: true
  })
}

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    data:{}
  })
}

export function batchAdd(saleChannel) {
  return request({
    url: '/product/batchAddProduct',
    method: 'post',
    data:{
      saleChannel:saleChannel
    }
  })
}

// 查询账号列表
export function getAccountList(params) {
  return request({
    url: '/user/listAccount',
    method: 'get',
    params: {}
  })
}

// 删除账号信息
export function deleteAccount(params) {
  return request({
    url: '/user/deleteAccount',
    method: 'post',
    data: params
  })
}

// 重置账号密码
export function resetAccountPwd(params) {
  return request({
    url: '/user/resetAccountPwd',
    method: 'post',
    data: params
  })
}

