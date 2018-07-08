import request from '@/utils/request'


export function register(loginReq) {
  return request()({
    url: '/user/register?t=' + new Date().getTime(),
    method: 'post',
    data: loginReq
  })
}

export function login(loginReq) {
  return request()({
    url: '/user/login?t=' + new Date().getTime(),
    method: 'post',
    data: loginReq
  })
}

export function logout() {
  return request()({
    url: '/user/logout',
    method: 'post'
  })
}

// 获取图形验证码
export function captcha() {
  return request()({
    url: '/captcha',
    method: 'get'
  })
}

// 登录发送短信
export function sendSMS(param) {
  return request({

  })({
    url: '/login/sendsms',
    method: 'post',
    data: param
  })
}
