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

	play(str: string): any {
		let rand = Math.floor(Math.random() * Math.floor(5)) * 1000;
		setTimeout(() => {
			return new Promise<string>((resolve, reject) => {
				resolve(str);
			});
		}, rand);
	}
}
