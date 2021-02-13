import {Board, BoardZone} from "./board.enum";

const readline = require("readline-sync");

export class Player {
    name: string;
    email: string;
    gameWin: number;
    gameLost: number;
    remainingShots: number;

    constructor(name: string, email: string, gameWin: number, gameLost: number) {
        this.name = name;
        this.email = email;
        this.gameWin = gameWin;
        this.gameLost = gameLost;
        this.remainingShots = 3;
    }

    /**
     * Play the turn of the player
     */
    play(): Promise<any> {
        // TODO : any -> [Board, BoardZone]
        return new Promise<number>((resolve, reject) => {
            let board = readline.question(`What was your shot ?`);
            let zone = readline.question(`What was the zone ?`);

            console.log(`Your shot was ${Board[board - 1]} on the zone ${BoardZone[zone - 1]}`);
        });
    }

}
