import {Player} from "./player";
import {ThreeHundredOne} from "./gamemodes/301";

let player1 = new Player("louis", "louis@louis.com", 0, 0);
let player2 = new Player("marvin", "marvin@marvin.com", 0, 0);
let player3 = new Player("julien", "julien@julien.com", 0, 0);

let tho = new ThreeHundredOne([player1]);

tho.init();
