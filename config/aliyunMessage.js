const axios = require('axios')

const sendMsgCode = (phone, randomCode) => {
  return axios({
    method: 'post',
    url: 'https://api-v2.xdclass.net/send_sms',
    data: {
      appid: "GSs03c0jyWIWxVqRVK",
      appSecret: "DSOVPxG85o9v7MvPEVWNow2n1WgtzYQq",
      code: randomCode,
      phoneNum: phone,
      templateCode: "SMS_168781429"
    }
  })
}

module.exports = sendMsgCode