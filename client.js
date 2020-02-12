const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.88.177",
    port: 50541
  });
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection to game server was established successfully");
    conn.write("Name: DP");
  });

  conn.on("data", data => console.log(data));

  return conn;
};

module.exports = { connect };
