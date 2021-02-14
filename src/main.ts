import {Player} from "./player";
import {Cricket} from "./gamemodes/cricket";

let player1 = new Player("louis", "louis@louis.com", 0, 0);
let player2 = new Player("marvin", "marvin@marvin.com", 0, 0);
let player3 = new Player("julien", "julien@julien.com", 0, 0);

let cricket = new Cricket([player1]);

cricket.init();
