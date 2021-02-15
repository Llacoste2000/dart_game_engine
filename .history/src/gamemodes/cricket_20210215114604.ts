import { Board } from "./../board.enum";
import { GameModeBase } from "../gamemode";
import { Player } from "../player";

export class Cricket extends GameModeBase {
	gates: any;

	constructor(
		players: Array<Player>,
		remainingShots: number = 3,
		turn: number = 0,
		end: boolean = false,
		gates?: any,
	) {
		super(players, turn, end, remainingShots);
		this.players.forEach(
			(element) =>
				(element.score = {
					gates: {
						"20": 1,
						"19": 1,
						"18": 1,
						"17": 1,
						"16": 1,
						"15": 1,
						"25": 1,
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
			"25": false,
		};
	}

	async startGame(): Promise<void> {
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
		if (playerShot[0] === Board["MISSED"]) {
			console.log(`${player.name} à raté son tir !`);
			return;
		}
		if (player.score["gates"][playerShot[0]] !== 0) {
			player.score["gates"][playerShot[0]] =
				player.score.gates[playerShot[0]] - 1;
			if (player.score["gates"][playerShot[0]] === 0) {
				console.log(`${player.name} à fermée sa porte ${playerShot[0]}`);
				if (!this.gates[playerShot[0]]) {
					console.log(
						`La porte ${playerShot[0]} à été fermée par ${player.name}`,
					);
					this.gates[playerShot[0]] = true;
					player.score.score += playerShot[0];
				}
			}
		}
		//Test du score pour la win
		let playerGatesStr = "";
		Object.keys(player.score.gates).map((element) => {
			playerGatesStr += player.score.gates[element];
		});
		if (playerGatesStr === "0000000") {
			console.log(
				`${player.name} à fermé toutes les portes ! La partie est terminé.`,
			);
			this.endGame();
		}
	}
}
