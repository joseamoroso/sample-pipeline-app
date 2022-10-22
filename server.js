const app = require("./app");

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = server;
