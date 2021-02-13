import {Player} from "./player";

export class GameModeBase {
    players: Array<Player>;
    turn: number;
    end: boolean;

    constructor(players: Array<Player>) {
        this.players = players;
        this.turn = 0;
        this.end = false;
    }

    /**
     * Start the game, players play turn by turn
     */
    startGame(): void {
    }


    /**
     * Play next turn
     */
    nextTurn(): void {
        this.turn++;
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
    playersScore(): any {
        let res = [];
        this.players.forEach((element, index) => {
            res[element.name] = element.
        })
    }
}
