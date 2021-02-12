import { Player } from "./player";
import { GameModeBase } from "./base.gamemode";

export class AroudTheWorld extends GameModeBase {
	constructor(players: Array<Player>) {
		super(players);
	}
}
