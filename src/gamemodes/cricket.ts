import { Board } from "./../board.enum";
import { GameModeBase } from "../gamemode";
import { Player } from "../player";

export class Cricket extends GameModeBase {
	gates: Object;

	constructor(
		players: Array<Player>,
		remainingShots: number = 3,
		turn: number = 0,
		end: boolean = false,
		gates?: Object,
	) {
		super(players, turn, end, remainingShots);
		this.players.forEach(
			(element) =>
				(element.score = {
					gates: {
						"20": 3,
						"19": 3,
						"18": 3,
						"17": 3,
						"16": 3,
						"15": 3,
						center: 3,
					},
					score: 0,
				}),
		);
		this.gates = {
			"20": false,
			"19": false,
			"18": false,
			"17": false,
			"16": false,
			"15": false,
			center: false,
		};
	}

	async startGame(): Promise<void> {
		// TODO: Refactoring logs when production
		do {
			let playingPlayer = this.players[this.turn % this.players.length];
			console.log(`---------------------------`);
			console.log(`C'est au tour de ${playingPlayer.name}`);
			console.log(`   Le score de ${playingPlayer.name} est`);
			console.log("   PORTES:", playingPlayer.score.gates);
			console.log("   SCORE:", playingPlayer.score.score);
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
		//TODO: Gérer les tirs pour le mode de jeu Cricket

		console.log(playerShot[0]);
		console.log(player.score.gates[playerShot[0]]);

		player.score["gates"][playerShot[0]] =
			player.score.gates[playerShot[0]] - 1;

		console.log(player.score);

		// player.score.gates[playerShot[0]]--

		// if (playerShot[0] === Board["MISSED"]) {
		// 	console.log(`${player.name} à raté son tir !`);
		// 	return;
		// }

		// //Test du score pour la win
		// let playerGatesStr = "";
		// Object.keys(player.score.gates).map((element) => {
		// 	playerGatesStr += player.score.gates[element];
		// });
		// console.log(playerGatesStr);
		// if (playerGatesStr === "0000000") {
		// 	console.log(
		// 		`${player.name} à fermé toutes les portes ! La partie est terminé.`,
		// 	);
		// 	this.endGame();
		// 	return;
		// }
	}
}
