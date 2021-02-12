import { Player } from "./player";

export class GameModeBase {
	players: Array<Player>;

	constructor(players: Array<Player>) {
		this.players = players;
	}

	startGame() {}

	addPlayer(player: Player) {
		this.players.push(player);
	}

	removePlayer(player: Player) {
		if (this.players.indexOf(player)) {
			this.players.splice(this.players.indexOf(player), 1);
		}
	}
}
