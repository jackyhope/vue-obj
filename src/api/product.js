import request from '@/utils/request'


export function getList(params) {
  return request({
    url: '/product/queryAllProductList',
    method: 'post',
    data:params
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
export function saveEdit(data) {
  return request({
    url: '/product/savePutOnProduct',
    method: 'post',
    data:data
  })
}
export function saveNewClass(saleChannel,name) {
  return request({
    url: '/product/addProductCategory',
    method: 'post',
    data:{
      saleChannel:saleChannel,
      categoryName:name
    }
  })
}
export function getCategory(saleChannel) {
  return request({
    url: '/product/productCategoryList',
    method: 'post',
    data:{
      saleChannel:saleChannel
    }
  })
}

export function productDetail(saleChannel,id) {
  return request({
    url: '/product/productDetail',
    method: 'post',
    data:{
      saleChannel:saleChannel,
      productCode:id
    }
  })
}export function putOnProduct(channel,ids) {
  return request({
    url: '/product/putOnProduct',
    method: 'post',
    data:{
      saleChannel:channel,
      productCodes:ids
    }
  })
}
export function putOffProduct(channel,ids) {
  return request({
    url: '/product/pullOffProduct',
    method: 'post',
    data:{
      saleChannel:channel,
      productCodes:ids
    }
  })
}export function getStatusList(channel) {
  return request({
    url: '/product/productStatusList',
    method: 'post',
    data:{
      saleChannel:channel
    }
  })
}
