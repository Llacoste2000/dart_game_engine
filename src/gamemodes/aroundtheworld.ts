import {Player} from "../player";
import {GameModeBase} from "../gamemode";
import {Board} from "../board.enum";

export class AroundTheWorld extends GameModeBase {

    constructor(players: Array<Player>, remainingShots: number = 3, turn: number = 0, end: boolean = false) {
        super(players, turn, end, remainingShots);
        this.players.forEach(element => element.setScore(null));
    }

    async startGame(): Promise<void> {
        do {
            let res = false;
            let playerTurn = this.players[this.turn % this.players.length];
            console.log(`---------------------------`);
            console.log(`C'est au tour de ${playerTurn.name}`);
            console.log(`   Le score de ${playerTurn.name} est ${playerTurn.score}`);
            do {
                console.log(this.remainingShots);
                const shot = await playerTurn.play();
                res = this.checkStage(playerTurn, shot);
                this.nextShot();
            } while (this.remainingShots !== 0 && !res);
            if (playerTurn.score == Board.TWENTY) {
                console.log(`Le joueur ${playerTurn.name} as gagné la partie !`);
                this.endGame();
            }
            this.nextTurn();
        } while (!this.end);
    }

    checkStage(player: Player, playerShot: any): boolean {

        console.log(player.score, playerShot[0] - 1);

        if (player.score === null && playerShot[0] === 0) {
            console.log(`${player.name} has increased his score !`);
            player.setScore(playerShot[0]);
            return true;
        }

        if (player.score === (playerShot[0] - 1)) {
            console.log(`${player.name} has increased his score !`);
            player.setScore(playerShot[0]);
            return true;
        }
        return false;
    }
}
