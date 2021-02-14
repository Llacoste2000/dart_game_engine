import {Player} from "../player";
import {GameModeBase} from "../gamemode";
import {Board} from "../board.enum";

export class AroundTheWorld extends GameModeBase {

    constructor(players: Array<Player>, remainingShots: number = 3, turn: number = 0, end: boolean = false) {
        super(players, turn, end, remainingShots);
        this.players.forEach(element => element.setScore(null));
    }

    /**
     * Start the game, players play turn by turn
     */
    async startGame(): Promise<void> {
        // TODO: Refactoring logs
        do {
            let res = false;
            let playingPlayer = this.players[this.turn % this.players.length];
            console.log(`---------------------------`);
            console.log(`C'est au tour de ${playingPlayer.name}`);
            console.log(`   Le score de ${playingPlayer.name} est ${playingPlayer.score}`);
            do {
                console.log(`Il reste ${this.remainingShots} tirs à ${playingPlayer.name}`)
                const shot = await playingPlayer.play();
                res = this.checkStage(playingPlayer, shot);
                this.nextShot();
            } while (this.remainingShots !== 0 && !res);
            if (playingPlayer.score == Board.TWENTY) {
                console.log(`Le joueur ${playingPlayer.name} as gagné la partie !`);
                this.endGame();
            }
            this.nextTurn();
        } while (!this.end);
    }

    /**
     *
     * @param {Player} player - the player shooting
     * @param playerShot - The shot informations of the current playing player
     */
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
