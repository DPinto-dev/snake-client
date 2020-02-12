const IP = "192.168.88.177";
const PORT = 50541;
const playerINITIALS = "Name: DP";

const playerKEYS = {
  w: "Move: up",
  k: "Move: up",
  s: "Move: down",
  j: "Move: down",
  a: "Move: left",
  h: "Move: left",
  d: "Move: right",
  l: "Move: right",
  e: "Say: Yeehaaa",
  "\u0020": "Say: spacebar"
};

module.exports = { IP, PORT, playerINITIALS, playerKEYS };
