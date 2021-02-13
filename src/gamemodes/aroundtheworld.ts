import { Player } from "../player";
import { GameModeBase } from "../gamemode";

export class AroundTheWorld extends GameModeBase {
	end: boolean;

	constructor(players: Array<Player>) {
		super(players);
		this.end = false;
	}

	startGame(): void {

	}
}
