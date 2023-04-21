import {Player} from "./Player";
import {Nationality} from "./Nationality";

export class Team {
    public name: string;
    public player: Player[];

    constructor(name: string) {
        this.name = name;
        this.player = [];
    }

    addPlayer(player: Player): void {
        this.player.push(player);
    }

    updatePlayer(index: number, player: Player): void {
        this.player[index] = player;
    }

    detelePlayer(index: number): void {
        this.player.splice(index, 1);
    }
    searchAge(age : number):Player[]{
        return this.player.filter(player => player.age === age);
    }
    searchPlayer(name: string) {
        return this.player.filter(player => player.name === name  );
    }
    searchNationality(nationality : Nationality){
        return this.player.filter(player => player.nationality === nationality)
    }
    searchByClub(club : string):Player[]{
        return this.player.filter(player => player.club === club);
    }
    searchBySalary(salary : number):Player[]{
        return this.player.filter(player => player.salary === salary)
    }
    getHighestPaidPlayer(): Player {
        return this.player.sort((a,b)=>b.salary - a.salary)[0];
    }
}