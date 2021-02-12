import { Player } from "./player";
import { GameModeBase } from "./base.gamemode";

export class AroundTheWorld extends GameModeBase {
	constructor(players: Array<Player>) {
		super(players);
	}
}
