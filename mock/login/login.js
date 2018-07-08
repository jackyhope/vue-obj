module.exports = function (req, res) {
  res.json({
    "code": "0000",
    message: '验证码错误',
    "data": {
      "token": "asfdasdf",
      'userType': 1
    }
  });
}
