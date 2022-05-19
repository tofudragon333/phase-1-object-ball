console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    // ANSWER: 'gameKey' is "home" or "away"
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      // ANSWER: 'teamKey' is "teamName"
      debugger

      // what is 'data' at each loop through out this block?
      // ANSWER: data is the 'player' object
      // when will the following line of code work and when will it break?s
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
// goodPractices();

// console.log(goodPractices());

function numPointsScored(name) {
  if (name === gameObject.player) {
    return gameObject.player.points;
  };
}

console.log(numPointsScored("Alan Anderson"));