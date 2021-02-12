import { Player } from "./player";

export class GameModeBase {
	players: Array<Player>;
	turn: number;

	constructor(players: Array<Player>) {
		this.players = players;
		this.turn = 0;
	}

	startGame(): void {
		for (let i = 0; i < 20; i++) {
			console.log(
				`c'est au tour de ${
					this.players[this.turn % this.players.length].name
				}`,
			);
			this.nextTurn();
		}
	}

	nextTurn(): void {
		this.turn++;
	}

	addPlayer(player: Player): void {
		this.players.push(player);
	}

	removePlayer(player: Player): void {
		if (this.players.indexOf(player)) {
			this.players.splice(this.players.indexOf(player), 1);
		}
	}
}
