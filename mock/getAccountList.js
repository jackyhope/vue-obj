module.exports = function(req, res) {
  res.json({
    code: '0000',
    message: '查询成功',
    data: { list: [{
      userId: 1,
      userAccount: '10235',
      createDate: '2016-05-03',
      accountStatus: 0
    }, {
      userId: 2,
      userAccount: '25356',
      createDate: '2016-05-03',
      accountStatus: 0
    }, {
      userId: 3,
      userAccount: '25356',
      createDate: '2016-05-03',
      deleteTime: '2016-05-03',
      accountStatus: 2
    }, {
      userId: 4,
      userAccount: '25356',
      createDate: '2016-05-03',
      deleteTime: '2016-05-03',
      accountStatus: 2
    }] }
  })
}
