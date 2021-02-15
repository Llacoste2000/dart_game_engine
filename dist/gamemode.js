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
        this.players = this.shuffle(this.players);
        this.startGame();
        // }
    }
    /**
     * Start the game, players play turn by turn
     */
    startGame() {
    }
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
    /**
     * Shuffles array
     * @param {Array} array - Array to shuffle.
     * @returns {Array} - Array shuffled
     */
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
exports.GameModeBase = GameModeBase;
