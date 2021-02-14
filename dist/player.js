"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const board_enum_1 = require("./board.enum");
const readline = require("readline-sync");
class Player {
    constructor(name, email, gameWin, gameLost) {
        this.name = name;
        this.email = email;
        this.gameWin = gameWin;
        this.gameLost = gameLost;
    }
    /**
     * Play the turn of the player
     */
    play() {
        return new Promise((resolve) => {
            let board, zone;
            do {
                board = readline.question(`Quel est le chiffre  ?`);
                zone = readline.question(`Quelle est la zone ?`);
            } while (board_enum_1.Board[board] === undefined || board_enum_1.BoardZone[zone] === undefined);
            console.log(`Ton tir est ${board_enum_1.Board[board]} dans la zone ${board_enum_1.BoardZone[zone]}`);
            // @ts-ignore
            resolve([board_enum_1.Board[board_enum_1.Board[board]], board_enum_1.BoardZone[board_enum_1.BoardZone[zone]]]);
        });
    }
    setScore(score) {
        this.score = score;
    }
}
exports.Player = Player;
