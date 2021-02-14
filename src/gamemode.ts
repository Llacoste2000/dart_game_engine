import {Player} from "./player";

export class GameModeBase {
    players: Array<Player>;
    turn: number;
    end: boolean;
    remainingShots: number;


    constructor(players: Array<Player>, turn: any = 0, end: any = false, remainingShots: number = 3) {
        this.players = players;
        this.turn = turn;
        this.end = end;
        this.remainingShots = remainingShots;
    }

    init(): any {
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
    startGame(): void {
    }

    /**
     * Play next turn until no shots remaining
     */
    nextTurn(): void {
        this.turn++;
        this.remainingShots = 3;
    }

    /**
     * Play the next shot
     */
    nextShot(): void {
        this.remainingShots--;
    }

    /**
     * End the game loop
     */
    endGame(): void {
        this.end = true;
    }

    /**
     * Get all playing players
     */
    getPlayers(): Array<Player> {
        return this.players;
    }

    /**
     * Shuffles array
     * @param {Array} array - Array to shuffle.
     * @returns {Array} - Array shuffled
     */
    shuffle(array: any): Array<any> {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
