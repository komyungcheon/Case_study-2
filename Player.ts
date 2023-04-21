
export class Player {
    public name: string;
    public age : number;
    public position: string;
    public number: number;
    public nationality: string;
    public club: string;
    public salary: number;

    constructor(name: string,age : number, position :string,number :number,nationality :string,club :string,salary :number) {
        this.name = name;
        this.age =age;
        this.position = position;
        this.number = number;
        this.nationality = nationality;
        this.club = club;
        this.salary = salary;
    }
}