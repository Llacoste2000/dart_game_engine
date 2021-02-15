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
exports.Cricket = void 0;
const board_enum_1 = require("./../board.enum");
const gamemode_1 = require("../gamemode");
class Cricket extends gamemode_1.GameModeBase {
    constructor(players, remainingShots = 3, turn = 0, end = false, gates) {
        super(players, turn, end, remainingShots);
        this.players.forEach((element) => (element.score = {
            gates: {
                "20": 1,
                "19": 1,
                "18": 1,
                "17": 1,
                "16": 1,
                "15": 1,
                "25": 1,
            },
            score: 0,
        }));
        this.gates = {
            "20": false,
            "19": false,
            "18": false,
            "17": false,
            "16": false,
            "15": false,
            "25": false,
        };
    }
    startGame() {
        return __awaiter(this, void 0, void 0, function* () {
            do {
                let playingPlayer = this.players[this.turn % this.players.length];
                console.log(`---------------------------`);
                console.log(`C'est au tour de ${playingPlayer.name}`);
                console.log(`   Le score de ${playingPlayer.name} est`);
                console.log("   PORTES:", playingPlayer.score.gates);
                console.log("   SCORE:", playingPlayer.score.score);
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
        if (player.score["gates"][playerShot[0]] !== 0) {
            player.score["gates"][playerShot[0]] =
                player.score.gates[playerShot[0]] - 1;
            if (player.score["gates"][playerShot[0]] === 0) {
                console.log(`${player.name} à fermée sa porte ${playerShot[0]}`);
                if (!this.gates[playerShot[0]]) {
                    console.log(`La porte ${playerShot[0]} à été fermée par ${player.name}`);
                    this.gates[playerShot[0]] = true;
                    player.score.score += playerShot[0];
                }
            }
        }
        //Test du score pour la win
        let playerGatesStr = "";
        Object.keys(player.score.gates).map((element) => {
            playerGatesStr += player.score.gates[element];
        });
        console.log(playerGatesStr);
        if (playerGatesStr === "0000000") {
            console.log(`${player.name} à fermé toutes les portes ! La partie est terminé.`);
            this.endGame();
        }
    }
}
exports.Cricket = Cricket;
