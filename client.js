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

  //Hardcoded inputs to test server response and snake movement
  // conn.on("connect", () => {
  //   setInterval(() => conn.write("Move: up"), 500);

  //   setInterval(() => conn.write("Move: left"), 550);
  //   setInterval(() => conn.write("Move: down"), 600);
  //   setInterval(() => conn.write("Move: right"), 650);
  // });

  return conn;
};

module.exports = { connect };
