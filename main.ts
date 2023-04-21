import {Team} from "./Team";
import {Player} from "./Player";
import {Nationality} from "./Nationality";


const team = new Team("Arsenal");
team.addPlayer(new Player("Thierry Henry", 40, "Football player", 14, Nationality.France, "Arsenal", 250000));
team.addPlayer(new Player("Harry Kane", 35, "Football player", 4, Nationality.England, "Tottenham", 150000));
team.addPlayer(new Player("Cristiano Ronaldo", 38, "King", 7, Nationality.Portugal, "MU", 1000000));
team.addPlayer(new Player("Lionel Messi", 35, "Football player", 10, Nationality.Argentina, "PSG", 100000));
team.addPlayer(new Player("Toni Kroos", 32, "Football player", 8, Nationality.Germany, "Real Madrid", 110000));
team.addPlayer(new Player("Xabi Alonso", 45, "Football player", 14, Nationality.Spain, "Liverpool", 220000));
team.addPlayer(new Player("Kaoru Mitoma", 28, "Football player", 22, Nationality.Japan, "Brighton", 230000));
team.addPlayer(new Player("Son Heung Min", 32, "Football player", 23, Nationality.Korean, "Tottenham ", 330000));
team.addPlayer(new Player("Neymar", 30, "Football player", 23, Nationality.Brazil, "PSG", 660000));
console.table(team.player)
team.updatePlayer(9, new Player("Lewandowski", 33, "Football player", 9, Nationality.Germany, "Bayen", 400000));
team.updatePlayer(10, new Player("Muller", 33, "Football player", 9, Nationality.Germany, "Bayen", 190000));
console.table(team.player)
// team.detelePlayer(2);
// console.table(team.player);
// console.table(team.searchAge(40));
// console.table(team.searchByClub("PSG"));
// console.table(team.searchBySalary(190000));
// console.table(team.getHighestPaidPlayer());
// console.table(team.searchPlayer("Lewandowski"))
console.table(team.searchNationality(Nationality.Spain));