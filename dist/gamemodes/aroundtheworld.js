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
exports.AroundTheWorld = void 0;
const gamemode_1 = require("../gamemode");
const board_enum_1 = require("../board.enum");
class AroundTheWorld extends gamemode_1.GameModeBase {
    constructor(players, remainingShots = 3, turn = 0, end = false) {
        super(players, turn, end, remainingShots);
        this.players.forEach((element) => (element.score = null));
    }
    startGame() {
        return __awaiter(this, void 0, void 0, function* () {
            do {
                let playingPlayer = this.players[this.turn % this.players.length];
                console.log(`---------------------------`);
                console.log(`C'est au tour de ${playingPlayer.name}`);
                console.log(`   Le score de ${playingPlayer.name} est ${playingPlayer.score}`);
                do {
                    console.log(`Il reste ${this.remainingShots} tirs à ${playingPlayer.name}`);
                    const shot = yield playingPlayer.play();
                    this.checkStage(playingPlayer, shot);
                    this.nextShot();
                } while (this.remainingShots !== 0 && !this.end);
                this.nextTurn();
            } while (!this.end);
        });
    }
    /**
     * Checks the players shots to calculate the score
     * @param {Player} player - the player shooting
     * @param playerShot - The shot informations of the current playing player
     */
    checkStage(player, playerShot) {
        if (playerShot[0] === board_enum_1.Board["MISSED"]) {
            console.log(`${player.name} à raté son tir !`);
            return;
        }
        if ((player.score === null && playerShot[0] === board_enum_1.Board["ONE"]) ||
            player.score + 1 === playerShot[0]) {
            console.log(`${player.name} est passé au tour suivant !`);
            player.score = playerShot[0];
            if (player.score === board_enum_1.Board.TWENTY) {
                console.log(`Le joueur ${player.name} as gagné la partie !`);
                this.endGame();
            }
            return;
        }
    }
}
exports.AroundTheWorld = AroundTheWorld;
