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

    /**
     * Start the game, players play turn by turn
     */
    startGame(): void {
    }

    // async loop(callback: Function): Promise<void> {
    //     do {
    //         let res = false;
    //         let playerTurn = this.players[this.turn % this.players.length];
    //         console.log(`C'est au tour de ${playerTurn.name}`);
    //         console.log(`Le score de ${playerTurn.name} est ${playerTurn.score}`);
    //         do {
    //             const shot = await playerTurn.play();
    //             res = callback(playerTurn, shot);
    //             console.log('shot', shot);
    //             console.log('res', res);
    //             this.nextShot();
    //         } while (this.remainingShots !== 0 && !res);
    //         this.nextTurn();
    //     } while (!this.end);
    // }


    /**
     * Play next turn
     */
    nextTurn(): void {
        this.turn++;
        this.remainingShots = 3;
    }

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
     * Retourne de score des tous les joueurs
     */
    getPlayers(): Array<Player> {
        return this.players;
    }
}
