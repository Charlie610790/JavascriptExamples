// simple variable that assigns the value of X to 3
var x = 3
// when run "x > 4" in console will return false

// assigns variable teamname to "Red Sox"
var teamname = "Red Sox"
// when I enter "teamname" in console it will pull teamname "Red Sox"

// assigns team stats
var teamstats = [15, 25, 50]
//

//


// for each over players array and get rbi's and push into new array then reduce 
//  said array then 


function averageRBI(aryplayer) {
  var aryRBIs = aryplayer.map(function(player) {
    return player.rbi;
  });

  var sumRBIs = aryRBIs.reduce(function(rbi1, rbi2) {
    return rbi1 + rbi2;
  });

  return sumRBIs / aryplayer.length;
};
////////

function averageAtBats(atbat) {
  var atBats = atbat.map(function(player) {
    return player.atbats;
  });

  var sumAtBats = atBats.reduce(function(atbat1, atbat2) {
    return atbat1 + atbat2;
  });

  return sumAtBats / atbat.length;

};

//////////

var players = [
//assigning player variable names and values
////////Fielders////////////////////////////////////////////////////////////////////////////////////////
  {
    // Catchers
    //0
    name: "David Ross",
    battingaverage: 0.182,
    position: "Catcher",
    rbi: 44,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 2,
    doubles: 2,
    triples: 0,
    atbats: 33,
    games: 11,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  {
    //1
    name: "A.J. Pierzynski",
    battingaverage: 0.275,
    position: "Catcher",
    rbi: 15,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 3,
    doubles: 2,
    triples: 0,
    atbats: 91,
    games: 27,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  // Infielders

  {
    //2
    name: "Xander Bogaerts",
    battingaverage: 0.268,
    position: "Short Stop",
    rbi: 53,
    otherbatting: {
      walks: 4,
      strikeouts: 19
    },
    homeruns: 1,
    doubles: 7,
    triples: 0,
    atbats: 112,
    games: 31,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  {
    //3
    name: "Jonathan Herrera",
    battingaverage: 0.182,
    position: "Short Stop",
    rbi: 43,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 0,
    doubles: 0,
    triples: 0,
    atbats: 33,
    games: 17,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  {
    //4
    name: "Will Middlebrooks",
    battingaverage: 0.208,
    position: "Third Base",
    rbi: 35,
    otherbatting: {
      walks: 9,
      strikeouts: 19
    },
    homeruns: 2,
    doubles: 3,
    triples: 0,
    atbats: 48,
    games: 14,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  {
    //5
    name: "Mike Napoli",
    battingaverage: 0.290,
    position: "First Base",
    rbi: 137,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 5,
    doubles: 6,
    triples: 0,
    atbats: 107,
    games: 30,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  {
    //6
    name: "Dustin Pedroia",
    battingaverage: 0.275,
    position: "Second Base",
    rbi: 130,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 1,
    doubles: 11,
    triples: 0,
    atbats: 131,
    games: 31,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  // Outfielders,

  {
    //7
    name: "Jackey Bradley Jr.",
    battingaverage: 0.216,
    position: "Center Field",
    rbi: 133,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 0,
    doubles: 9,
    triples: 1,
    atbats: 97,
    games: 31,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  {
    //8
    name: "Mike Carp",
    battingaverage: 0.257,
    position: "Left Field",
    rbi: 23,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 0,
    doubles: 3,
    triples: 0,
    atbats: 35,
    games: 18,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  {
    //9
    name: "Johnny Gomes",
    battingaverage: 0.225,
    position: "Left Field",
    rbi: 123,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 3,
    doubles: 5,
    triples: 0,
    atbats: 71,
    games: 24,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  {
    //10
    name: "Grady Sizemore",
    battingaverage: 0.242,
    position: "Center Field",
    rbi: 121,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 2,
    doubles: 5,
    triples: 1,
    atbats: 91,
    games: 25,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  {
    //11
    name: "Shane victorino",
    battingaverage: 0.250,
    position: "Right Field",
    rbi: 32,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 0,
    doubles: 5,
    triples: 0,
    atbats: 40,
    games: 9,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

  // Designated Hitter,

  {
    //12
    name: "David Ortiz",
    battingaverage: 0.241,
    position: "Designated Hitter",
    rbi: 127,
    otherbatting: {
      walks: 3,
      strikeouts: 12
    },
    homeruns: 6,
    doubles: 5,
    triples: 0,
    atbats: 112,
    games: 30,
    stolenbase: 0,
    caughtstealing: 0,
    runs: 9
  },

////////Pitchers////////////////////////////////////////////////////////////////////////////////////////
  {
    //13
    name: "Koji Uehara",
    position: "Pitcher",
    wins: 0,
    losses: 1,
    era: 1.32,
    rbi:20,
    strikeouts: 19,
    walks: 3,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    },
    stolenbase: 0,
    caughtstealing: 0,
    atbats: 90,
    runs: 9

  },

  {
    //14
    name: "Clay Buchholz",
    position: "Pitcher",
    wins: 2,
    losses: 2,
    era: 5.63,
    strikeouts: 24,
    rbi:20,
    walks: 9,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    },
    stolenbase: 0,
    caughtstealing: 0,
    atbats: 90,
    runs: 9

  },

  {
    //15
    name: "Felix Doubront",
    position: "Pitcher",
    wins: 1,
    losses: 3,
    rbi:20,
    era: 5.09,
    strikeouts: 24,
    walks: 15,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    },
    stolenbase: 0,
    caughtstealing: 0,
    atbats: 990,
    runs: 9

  },

  {
    //16
    name: "John Lackey",
    position: "Pitcher",
    wins: 4,
    losses: 2,
    era: 3.72,
    rbi:40,
    strikeouts: 43,
    walks: 11,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    },
    stolenbase: 0,
    caughtstealing: 0,
    atbats: 90,
    runs: 9

  },

  {

    //18
    name: "Jon Lester",
    position: "Pitcher",
    wins: 3,
    losses: 4,
    era: 2.59,
    strikeouts: 58,
    rbi:50,
    walks: 10,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    },
    stolenbase: 0,
    caughtstealing: 0,
    atbats: 90,
    runs: 9

  },

  {

    //17
    name: "Andrew Miller",
    position: "Pitcher",
    wins: 1,
    losses: 0,
    era: 1.84,
    strikeouts: 20,
    walks: 4,
    rbi:50,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    },
    stolenbase: 0,
    caughtstealing: 0,
    atbats: 90,
    runs: 9

  }, 

  {
    //18
    name: "Jake Peavy",
    position: "Pitcher",
    wins: 1,
    losses: 1,
    rbi:40,
    era: 2.87,
    strikeouts: 36,
    walks: 21,
    otherbatting: {
      walks: 0,
      strikeouts: 0
    },
    stolenbase: 0,
    caughtstealing: 0,
    atbats: 90,
    runs: 9

  }
]