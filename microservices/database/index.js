const server = require("./src/server");
const { Character, Film, Planet } = require("./src/database");

//Character.get(1).then((res) => console.log(res));
Planet.get(1).then((res) => console.log(res));

server.listen(8004, () => {
  console.log("Database service on port 8004");
});
