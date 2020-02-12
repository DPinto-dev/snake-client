const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "192.168.88.177",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", data => console.log(data));

  conn.on("connect", () => {
    console.log("Connection to game server was established successfully");
    conn.write("Name: DP");
  });

  return conn;
};

module.exports = { connect };
