"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModeBase = void 0;
class GameModeBase {
    constructor(players, turn = 0, end = false, remainingShots = 3) {
        this.players = players;
        this.turn = turn;
        this.end = end;
        this.remainingShots = remainingShots;
    }
    init() {
        // if (this.players.length <= 1) {
        //     console.log(`Vous devez avoir au moins 2 joueurs pour faire une partie.`)
        // } else {
        this.startGame();
        // }
    }
    /**
     * Start the game, players play turn by turn
     */
    startGame() {
    }
    // async loop(callbak: Function): Promise<void> {
    //     do {
    //         let res = false;
    //         let playingPlayer = this.players[this.turn % this.players.length];
    //         console.log(`---------------------------`);
    //         console.log(`C'est au tour de ${playingPlayer.name}`);
    //         console.log(`   Le score de ${playingPlayer.name} est ${playingPlayer.score}`);
    //         do {
    //             console.log(`Il reste ${this.remainingShots} tirs à ${playingPlayer.name}`)
    //             const shot = await playingPlayer.play();
    //             res = callbak(playingPlayer, shot);
    //             this.nextShot();
    //         } while (this.remainingShots !== 0 && !res && !this.end);
    //         this.nextTurn();
    //     } while (!this.end);
    // }
    /**
     * Play next turn until no shots remaining
     */
    nextTurn() {
        this.turn++;
        this.remainingShots = 3;
    }
    /**
     * Play the next shot
     */
    nextShot() {
        this.remainingShots--;
    }
    /**
     * End the game loop
     */
    endGame() {
        this.end = true;
    }
    /**
     * Get all playing players
     */
    getPlayers() {
        return this.players;
    }
}
exports.GameModeBase = GameModeBase;
