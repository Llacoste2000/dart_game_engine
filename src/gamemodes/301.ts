import { GameModeBase } from "../gamemode";
import { Player } from "../player";
import { Board } from "../board.enum";

export class ThreeHundredOne extends GameModeBase {
	constructor(
		players: Array<Player>,
		remainingShots: number = 3,
		turn: number = 0,
		end: boolean = false,
	) {
		super(players, turn, end, remainingShots);
		this.players.forEach((element) => (element.score = 301));
	}

	async startGame(): Promise<void> {
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
	checkStage(player: Player, playerShot: any): void {
		let shotScore;

		if (playerShot[0] === Board["MISSED"]) {
			console.log(`${player.name} à raté son tir !`);
			return;
		}

		shotScore = playerShot[0] * playerShot[1];

		if (playerShot[1] === 2 && player.score - shotScore == 0) {
			player.score = 0;
			console.log(`${player.name} à gagné la partie !`);
			this.endGame();
			return;
		}

		if (player.score - shotScore == 1 || player.score - shotScore < 0) {
			console.log(`${player.name} à raté son tir !`);
			return;
		}

		player.score = player.score - shotScore;
		console.log(`le score de ${player.name} est maintenant ${player.score}`);
	}
}
