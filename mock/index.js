var express = require('express')
var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, DNT, User-Agent, Keep-Alive, logintoken')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

var login = require('./login/login')
app.use('/jjz/user/login', login)

var user = require('./login/user')
app.use('/jjz/user/findAccount', user)

app.use('/jjz/user/register', function (req, res) {
  res.json({
    'code': '0000',
    'message': 'ok'
  })
})


var logout = require('./login/logout')
app.use('/jjz/user/logout', logout)
app.use('/jjz/user/modifyAccountPwd', function (req, res) {
  // res.json({ 'code': 20000, 'data': { 'name': '22' }})
  res.json({
    'code': '0000',
    'message': 'ok'
  })
})

app.use('/jjz/captcha', function (req, res) {
  res.json({
    'code': '0000',
    'data': {
      'captcha': 'data:data:image/Png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAcCAYAAADRJblSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ3SURBVFhH7ZbLSgNRDIb7eL6FfYh5Ad9D3PkComuhuOxCmH0pLnUjFKEI5di5ZOZPJpnkdEZR6uIDPZdc/iRnunjfp3TOnKUAZVnWVH//CyA3vwt0+ps4WYDchKYKELl/io8fE2Aqnj/al2e8e5NGwDPO2abd23Bds5Fnt8G6o63jGhNAOyz5WC1SuuV8bvSzPdu0v2/Prx7ZnuYzEscU0H5cgLfrdBCJI4fnrX6PYPcv0l7phlPZPV9ALMv0oZyxCI4AVJAF/5g+O8eZnXDEFc2F+2fcX6edeoezGK06AdUbJglBtO3t2WQVMwLtbMjOgxHCcWzE5IKMCUz2YwJsitao3rpdIG0yIZtGsNobI2mKMBSekPHgHkExxkYgUwC5r+K8KTZFO+OWADBmgXhiArBgKYAGVrGQAPwdSHeXuhA0Tk9LWF+mF+gsNkr1+fgIEK4A1Cr8pTUQrTig66SKvpu4bRD4KPwezr+u+9Hy4+GFsnA/g7jmObW/ArwymlDc9lGcDR8RtO3FISuv5UW4AoyD7VzU7Snv80fNqQrrkB4uLIjJRs76VI8XNvYGGGBylerMkUjG7g5Oub6CtlfmGOwObOJb9XAzSBpRBWAJjCJaGishq9juke1xH+KBbGGJdva1LxLE5QhAZAmgzp768leB6G045oONy6rokjFHQIwUxhf5AlTER0CZz2hbh8D29T6nSiyc4VujCV/9n/EGkPJa681D3QFe8oT5Q0qPbwYBdCNRrLtTbM7BnxAgciaKtBUSwArAWp+bOf1IW7UAngNrn9YReea3ExJgDEw+14Z25xQ7uaCPrDcAmSNQzcYcdj16Hyl9AeMCsAb8c9ZBAAAAAElFTkSuQmCC',

      'captCode': '635edd4bc809461cb951df811b901eee'
    },
    'message': 'sorry'
  })
})
app.use('/jjz/login/sendsms', function (req, res) {
  res.json({
    'code': '0000',
    'data': {
      'result': true
    },
    'message': 'sorry'
  })
})

app.use('/jjz/user/addAccount', function (req, res) {
  res.json({
    'code': '0001',
    'message': 'sorry'
  })
})
var getAccountList = require('./getAccountList')
app.use('/jjz/user/listAccount', getAccountList)

app.use('/jjz/product/queryAllProductList', function (req, res) {
  res.json({
    'code': '0000',
    'data': {
      'currentPageIndex': 0,
      'pageNo': 0,
      'pageSize': 0,
      'rows': [{
        'categoryCode': '22',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '1',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      },
      {
        'categoryCode': '11',
        'investPeriod': 0,
        'minYieldRate': 'string',
        'productCode': '222',
        'productDisplayName': 'string',
        'productName': 'string',
        'productStartTime': 'string',
        'product_status': '2',
        'totalAmount': 'string',
        'valueTime': 'string'
      }
      ],
      'totalPage': 12,
      'totalRecordsCount': 0
    },
    'message': 'sorry'
  })
})
app.use('/jjz/product/productCategoryList', function (req, res) {
  res.json({
    'code': '0000',
    'data': [{
      'categoryCode': '11',
      'categoryName': '分类11',
      'description': 11,
      'oper': 11
    },
    {
      'categoryCode': '22',
      'categoryName': '分类22',
      'description': 22,
      'oper': 11
    }
    ],
    'message': 'sorry'
  })
})
app.use('/jjz/product/savePutOnProduct', function (req, res) {
  res.json({
    'code': '0000',
    'data': {},
    'message': 'sorry'
  })
})
app.use('/jjz/product/addProductCategory', function (req, res) {
  res.json({
    'code': '0000',
    'data': {},
    'message': 'sorry'
  })
})

app.use('/jjz/product/PutOnProduct', function (req, res) {
  res.json({
    'code': '0000',
    'data': {},
    'message': 'sorry'
  })
})
app.use('/jjz/product/PutOffProduct', function (req, res) {
  res.json({
    'code': '0000',
    'data': {},
    'message': 'sorry'
  })
})
app.use('/jjz/product/batchAddProduct', function (req, res) {
  res.json({
    'code': '0000',
    'data': {
      'successCount': '22',
      'totalCount': '24'
    },
    'message': 'sorry'
  })
})
app.use('/jjz/product/productStatusList', function (req, res) {
  res.json({
    'code': '0000',
    'data': [{
      'code': '22',
      'message': '下架'
    }, {
      'code': '244',
      'message': 's架'
    },
    {
      'code': '233',
      'message': '2222下2架'
    }
    ],
    'message': 'sorry'
  })
})

app.use('/jjz/product/productDetail', function (req, res) {
  res.json({
    'code': '0000',
    'data': {
      'categoryCode': '11',
      'investPeriod': '222222',
      'minYieldRate': 11,
      'productCode': 22,
      'productDisplayName': '产品1111111',
      'productName': '产品1111111',
      'productStartTime': '2011-11-11 11:11:11',
      'totalAmount': '500000',
      'valueTime': '2011-11-11'
    },
    'message': 'sorry'
  })
})

app.use('/hello', function (req, res) {
  res.json({
    'path': 'hello',
    'method': 'post'
  })
})

app.listen(3000, function () {
  console.log('local mock-server listening on port 3000!')
})
