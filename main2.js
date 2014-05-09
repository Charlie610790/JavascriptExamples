
// simple variable that assigns the value of X to 3
var x = 3
// when run "x > 4" in console will return false

// assigns variable teamname to "Red Sox"
var teamname = "Red Sox"
// when I enter "teamname" in console it will pull teamname "Red Sox"

// assigns team stats
var teamstats = [15, 25, 50]
//

var players = [
  //assigning player variable names and values
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
////////Fielders////////////////////////////////////////////////////////////////////////////////////////
  
  {
    // Catchers
    //0
    name: "David Ross",
    battingaverage: 0.182,
    rbi: 4,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 2,
    doubles: 2,
    triples: 0,
    atbats: 33,
    games: 11
  },

  {
    //1
    name: "A.J. Pierzynski",
    battingaverage: 0.275,
    rbi: 15,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 3,
    doubles: 2,
    triples: 0,
    atbats: 91,
    games: 27
  },

  // Infielders

  {
    //2
    name: "Xander Bogaerts",
    battingaverage: 0.268,
    rbi: 5,
    otherbatting: {
      walks: 4,
      strikeouts: 19
    },
    homeruns: 1,
    doubles: 7,
    triples: 0,
    atbats: 112,
    games: 31
  },

  {
    //3
    name: "Jonathan Herrera",
    battingaverage: 0.182,
    rbi: 4,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 0,
    doubles: 0,
    triples: 0,
    atbats: 33,
    games: 17
  },

  {
    //4
    name: "Will Middlebrooks",
    battingaverage: 0.208,
    rbi: 5,
    otherbatting: {
      walks: 9,
      strikeouts: 19
    },
    homeruns: 2,
    doubles: 3,
    triples: 0,
    atbats: 48,
    games: 14
  },

  {
    //5
    name: "Mike Napoli",
    battingaverage: 0.290,
    rbi: 17,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 5,
    doubles: 6,
    triples: 0,
    atbats: 107,
    games: 30
  },

  {
    //6
    name: "Dustin Pedroia",
    battingaverage: 0.275,
    rbi: 10,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 1,
    doubles: 11,
    triples: 0,
    atbats: 131,
    games: 31
  },

  // Outfielders,

  {
    //7
    name: "Jackey Bradley Jr.",
    battingaverage: 0.216,
    rbi: 13,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 0,
    doubles: 9,
    triples: 1,
    atbats: 97,
    games: 31
  },

  {
    //8
    name: "Mike Carp",
    battingaverage: 0.257,
    rbi: 2,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 0,
    doubles: 3,
    triples: 0,
    atbats: 35,
    games: 18
  },

  {
    //9
    name: "Johnny Gomes",
    battingaverage: 0.225,
    rbi: 13,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 3,
    doubles: 5,
    triples: 0,
    atbats: 71,
    games: 24
  },

  {
    //10
    name: "Grady Sizemore",
    battingaverage: 0.242,
    rbi: 11,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 2,
    doubles: 5,
    triples: 1,
    atbats: 91,
    games: 25,
  },
  {
    //11
    name: "Shane victorino",
    battingaverage: 0.250,
    rbi: 3,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 0,
    doubles: 5,
    triples: 0,
    atbats: 40,
    games: 9
  },

  // Designated Hitter,

  {
    //12
    name: "David Ortiz",
    battingaverage: 0.241,
    rbi: 17,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 6,
    doubles: 5,
    triples: 0,
    atbats: 112,
    games: 30
  },

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////Pitchers////////////////////////////////////////////////////////////////////////////////////////
  {
    //13
    name: "Koji Uehara",
    wins: 0,
    losses: 1,
    era: 1.32,
    strikeouts: 19,
    walks: 3,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    }
  },

  {
    //14
    name: "Clay Buchholz",
    wins: 2,
    losses: 2,
    era: 5.63,
    strikeouts: 24,
    walks: 9,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    }
  },

  {
    //15
    name: "Felix Doubront",
    wins: 1,
    losses: 3,
    era: 5.09,
    strikeouts: 24,
    walks: 15,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    }
  },

  {
    //16
    name: "John Lackey",
    wins: 4,
    losses: 2,
    era: 3.72,
    strikeouts: 43,
    walks: 11,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    }
  },

  {

    //18
    name: "Jon Lester",
    wins: 3,
    losses: 4,
    era: 2.59,
    strikeouts: 58,
    walks: 10,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    }
  },

  {

    //17
    name: "Andrew Miller",
    wins: 1,
    losses: 0,
    era: 1.84,
    strikeouts: 20,
    walks: 4,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    }
  },

  {
    //18
    name: "Jake peavy",
    wins: 1,
    losses: 1,
    era: 2.87,
    strikeouts: 36,
    walks: 21,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    }
  }
  
]

//

// Function to pull all multiple base hits and add them together.
function multiplebase (player) {
	return player.doubles  + player.triples + player.homeruns;
}
//

// Function to pull player at bats and divide by the number of games to determine average at bat per game.
function batspergame (player) {
	return player.atbats / player.games;
}
//

// Function to pull player homeruns and divide by the number of games to determine average home runs per game.
function homerunspergame (player) {
	return player.homeruns / player.games;
}
//

// Function to pull player doubles and divide by the number of games to determine average home runs per game.
function doublespergame (player) {
	return player.doubles / player.games;
}
//

// Function to pull player triples and divide by the number of games to determine average home runs per game.
function triplespergame (player) {
	return player.triples / player.games;
}
//

function averagerbi (player) {
  var total = array.reduce(function(first,second){
    return first + second
  })
  console.log('total is', total);
  return total / rbiaverage.length;
}
