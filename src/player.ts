import {Board, BoardZone} from "./board.enum";

const readline = require("readline-sync");

export class Player {
    name: string;
    email: string;
    gameWin: number;
    gameLost: number;
    score: any;

    constructor(name: string, email: string, gameWin: number, gameLost: number) {
        this.name = name;
        this.email = email;
        this.gameWin = gameWin;
        this.gameLost = gameLost;
    }

    /**
     * Play the turn of the player
     */
    play(): Promise<any> {
        return new Promise<any>((resolve) => {
            let board = readline.question(`What was your shot ?`);
            let zone = readline.question(`What was the zone ?`);

            console.log(`Your shot was ${Board[board - 1]} on the zone ${BoardZone[zone - 1]}`);
            // @ts-ignore
            resolve([Board[Board[board - 1]], BoardZone[BoardZone[zone - 1]]]);
        });
    }

    setScore(score: any): void {
        this.score = score;
    }

}
