export class Player {
	name: string;
	email: string;
	gameWin: number;
	gameLost: number;

	constructor(name: string, email: string, gameWin: number, gameLost: number) {
		this.name = name;
		this.email = email;
		this.gameWin = gameWin;
		this.gameLost = gameLost;
	}
}
