app.service('footballData', footballData);

footballData.$inject = ['$http'];

function footballData ($http) {
  var apiKey = '96b2d98e78db4b73a868ae4ef7b33cd0';

  $http({
    headers: { 'X-Auth-Token': apiKey },
    url: 'http://api.football-data.org/v1/soccerseasons/398/leagueTable',
    dataType: 'json',
    type: 'GET',
  });

}
