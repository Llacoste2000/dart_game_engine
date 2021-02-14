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
            let board, zone;

            do {
                board = readline.question(`Quel est le chiffre  ?`);
                zone = readline.question(`Quelle est la zone ?`);

            } while (Board[board] === undefined || BoardZone[zone] === undefined);

            console.log(`Ton tir est ${Board[board]} dans la zone ${BoardZone[zone]}`);
            // @ts-ignore
            resolve([Board[Board[board]], BoardZone[BoardZone[zone]]]);
        });
    }

    setScore(score: any): void {
        this.score = score;
    }

}
