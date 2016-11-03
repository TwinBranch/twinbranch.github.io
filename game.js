var team1 = "Cowboys";
var team2 = "Giants";
var cPlayers = "Dak Prescott Ezekiel Elliot";
var gPlayers = "Eli Manning, Odell Beckham Jr.";


if (team1 == "Cowboys") {

  document.write(cPlayers);

}

else {

  document.write(gPlayers);

}
document.getElementById("printArea").innerHTML = "<div><p>" + cPlayers + "</p></div>";
