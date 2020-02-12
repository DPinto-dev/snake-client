const net = require("net");
const { IP, PORT, playerINITIALS } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection to game server was established successfully");
    conn.write(playerINITIALS);
  });

  conn.on("data", data => console.log(data));

  return conn;
};

module.exports = { connect };
