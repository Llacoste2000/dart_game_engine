import { Player } from "../player";
import { GameModeBase } from "../gamemode";
import { Board } from "../board.enum";

export class AroundTheWorld extends GameModeBase {
	constructor(
		players: Array<Player>,
		remainingShots: number = 3,
		turn: number = 0,
		end: boolean = false,
	) {
		super(players, turn, end, remainingShots);
		this.players.forEach((element) => (element.score = null));
	}

	async startGame(): Promise<void> {
		// TODO: Refactoring logs when production
		do {
			let playingPlayer = this.players[this.turn % this.players.length];
			console.log(`---------------------------`);
			console.log(`C'est au tour de ${playingPlayer.name}`);
			console.log(
				`   Le score de ${playingPlayer.name} est ${playingPlayer.score}`,
			);
			do {
				console.log(
					`Il reste ${this.remainingShots} tirs à ${playingPlayer.name}`,
				);
				const shot = await playingPlayer.play();
				this.checkStage(playingPlayer, shot);
				this.nextShot();
			} while (this.remainingShots !== 0 && !this.end);
			this.nextTurn();
		} while (!this.end);
	}

	/**
	 * Checks the players shots to calculate the score
	 * @param {Player} player - the player shooting
	 * @param playerShot - The shot informations of the current playing player
	 */
	checkStage(player: Player, playerShot: any) {
		if (playerShot[0] === Board["MISSED"]) {
			console.log(`${player.name} à raté son tir !`);
			return;
		}

		if (
			(player.score === null && playerShot[0] === Board["ONE"]) ||
			player.score + 1 === playerShot[0]
		) {
			console.log(`${player.name} est passé au tour suivant !`);
			player.score = playerShot[0];
			if (player.score === Board.TWENTY) {
				console.log(`Le joueur ${player.name} as gagné la partie !`);
				this.endGame();
			}
			return;
		}
	}
}
