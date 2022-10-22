const jwt = require('jsonwebtoken');


function generateAccessToken(username) {
  console.log(process.env)
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }


const token = generateAccessToken({ username: "jamoroso" });

console.log(token)