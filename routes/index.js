var express = require("express");
var router = express.Router();


function getPlayers(query) {
  const players = [{ name: "John", age: 13 },
    { name: "Alexis", age: 13 },
    { name: "Juan", age: 13 },
    { name: "IdontKnow", age: 13 },
    { name: "Edwin", age: 13 },
    { name: "Eliza", age: 13 },
    { name: "Mafe", age: 13 },
    ];


    return players.filter(p => p.name.toUpperCase().startsWith(query.toUpperCase()));
}


/* GET home page. */
router.get("/players", function (req, res, next) {

  const query = req.query["q"] || "";
  res.json({
    players: getPlayers(query),
  });
});

module.exports = router;
