"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var Team = /** @class */ (function () {
    function Team(name) {
        this.name = name;
        this.player = [];
    }
    Team.prototype.addPlayer = function (player) {
        this.player.push(player);
    };
    Team.prototype.updatePlayer = function (index, player) {
        this.player[index] = player;
    };
    Team.prototype.detelePlayer = function (index) {
        this.player.splice(index, 1);
    };
    Team.prototype.searchAge = function (age) {
        return this.player.filter(function (player) { return player.age === age; });
    };
    Team.prototype.searchPlayer = function (name) {
        return this.player.filter(function (player) { return player.name === name; });
    };
    Team.prototype.searchNationality = function (nationality) {
        return this.player.filter(function (player) { return player.nationality === nationality; });
    };
    Team.prototype.searchByClub = function (club) {
        return this.player.filter(function (player) { return player.club === club; });
    };
    Team.prototype.searchBySalary = function (salary) {
        return this.player.filter(function (player) { return player.salary === salary; });
    };
    Team.prototype.getHighestPaidPlayer = function () {
        return this.player.sort(function (a, b) { return b.salary - a.salary; })[0];
    };
    return Team;
}());
exports.Team = Team;
