const axios = require('axios');

class ApiProvider {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getRestToken(applicationId, privateKey) {
    const payload = {
      application_id: applicationId,
      private_key: privateKey
    };

    const url = `${this.baseUrl}/v2/request/token`;
    const response = await axios.post(url, payload, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    // return response.data;
    return 'hihi';
  }

  async getEasyPayUserToken(token, user) {
    const payload = {
      user_id: user.id,
      email: user.email,
      name: user.username,
      gender: user.gender,
      birth: user.birth,
      phone: user.phone,
    };

    const url = `${this.baseUrl}/v2/request/user/token`;
    const response = await axios.post(url, payload, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  }
}

module.exports = ApiProvider;

var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send(
        "<p>안녕하세요</p>"
    )
})
app.listen(3000, (err)=> {
    console.log(3000);
})
