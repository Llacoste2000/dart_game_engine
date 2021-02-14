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
     * Shuffles array in place. ES6 version
     * @param {Array} array items An array containing the items.
     */
    shuffle(array: any): Array<any> {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
