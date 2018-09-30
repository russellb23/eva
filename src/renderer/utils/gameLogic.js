// function that evaluates the state of the robo and the player and finalizes the winner
// Russell B

function goGame (playerState) {
  var roboState = Math.floor(Math.random() * (3 - 1 + 1)) + 1
  var playerStat = 'p'
  var roboStat = 'r'
  var tie = 't'
  if (playerState === roboState) {
    return tie
  } else if (playerState !== roboState) {
    if (playerState < roboState) {
      if (playerState === 1 && roboState === 2) {
        return playerStat
      } else if (playerState === 2 && roboState === 3) {
        return playerStat
      } else if (playerState === 1 && roboState === 3) {
        return roboStat
      }
    } else if (playerState > roboState) {
      if (playerState === 3 && roboState === 2) {
        return roboStat
      } else if (playerState === 3 && roboState === 1) {
        return playerStat
      } else if (playerState === 2 && roboState === 1) {
        return roboStat
      }
    } else {
      alert('Choosen states are not valid')
    }
  }
}

var result = []
var i
for (i = 0; i < 50; i++) {
  result.push(goGame(1))
}
for (i = 0; i < 50; i++) {
  result.push(goGame(2))
}
for (i = 0; i < 50; i++) {
  result.push(goGame(3))
}
// console.log(result, result.length);

var count = {}

result.forEach(function (el) {
  count[el] = count[el] + 1 || 1
})
Math.round(0.2)
console.log(count)
