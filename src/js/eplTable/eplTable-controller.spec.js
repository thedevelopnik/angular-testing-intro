describe("helloService", function() {

    var controller = null;
    $scope = null;

    beforeEach(module('soccerData'));


  it('returns soccer data on http get', inject(function ($controller, $httpBackend) {
    var scope = {};



    // $httpBackend.when('GET', 'http://api.football-data.org/v1/soccerseasons/398/leagueTable')
    // .respond(['whatever I want my response to include']);
    //
    // var controller = $controller('a controller', {
    //   $scope: scope
    // });
  }));

});


  // {
  //     "leagueCaption": "Premier League 2015/16",
  //     "matchday": 10,
  //     "standing":
  //     [
  //         {
  //             "rank": 1,
  //             "team": "ManCity",
  //             "teamId": 65,
  //             "playedGames": 10,
  //             "crestURI": "http://upload.wikimedia.org/wikipedia/de/f/fd/ManCity.svg",
  //             "points": 22,
  //             "goals": 24,
  //             "goalsAgainst": 8,
  //             "goalDifference": 16
  //         },
  //         {
  //             "rank": 2,
  //             "team": "Arsenal",
  //             "teamId": 57,
  //             "playedGames": 10,
  //             "crestURI": "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
  //             "points": 22,
  //             "goals": 18,
  //             "goalsAgainst": 8,
  //             "goalDifference": 10
  //         },
  //         {
  //             "rank": 3,
  //             "team": "West Ham",
  //             "teamId": 563,
  //             "playedGames": 10,
  //             "crestURI": "http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg",
  //             "points": 20,
  //             "goals": 22,
  //             "goalsAgainst": 13,
  //             "goalDifference": 9
  //         },
  //         {
  //             "rank": 4,
  //             "team": "ManU",
  //             "teamId": 66,
  //             "playedGames": 10,
  //             "crestURI": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg",
  //             "points": 20,
  //             "goals": 15,
  //             "goalsAgainst": 8,
  //             "goalDifference": 7
  //         }
  //     ]
  // }
