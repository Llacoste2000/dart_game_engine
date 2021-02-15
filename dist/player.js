"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.Player = Player;
